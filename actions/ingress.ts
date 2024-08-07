'use server'

import {
	IngressAudioEncodingPreset,
	IngressInput,
	IngressVideoEncodingPreset,
 	type CreateIngressOptions
} from 'livekit-server-sdk'
import { TrackSource } from 'livekit-server-sdk/dist/proto/livekit_models'
import { db } from '@/lib/db'
import { getSelf } from '@/lib/auth-service'
import { ingressClient, resetIngress } from '@/lib/ingress-service'
import { revalidatePath } from 'next/cache'

   
  
  export const createIngress = async (ingressType: IngressInput) => {
	try {
		const self = await getSelf();
	
		if (!self) {
		  throw new Error('Unauthorized');
		}
	
		// Reset Existing Ingress
		await resetIngress(self.id);
	
		// Create Ingress
		const options: CreateIngressOptions = {
		  name: self.username,
		  roomName: self.id,
		  participantName: self.username,
		  participantIdentity: self.id,
		};
	
		if (ingressType === IngressInput.WHIP_INPUT) {
		  options.bypassTranscoding = true;
		} else {
		  options.video = {
			source: TrackSource.CAMERA,
			preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
		  };
		  options.audio = {
			source: TrackSource.MICROPHONE,
			preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
		  };
		}
	
		const ingress = await ingressClient.createIngress(ingressType, options);
	
		if (!ingress || !ingress.url || !ingress.streamKey) {
		  throw new Error('Failed to create ingress');
		}
	
  
	await db.stream.update({
	  where: { 
		userId: self.id 
	  },
	  data: {
		ingressId: ingress.ingressId,
		serverUrl: ingress.url,
		streamKey: ingress.streamKey,
	  },
	});
  
	revalidatePath(`/u/${self.username}/keys`)
	return JSON.stringify(ingress);
  }

  catch (err: any) {
    console.log(err.message);
    throw new Error(err.message);
  }
};