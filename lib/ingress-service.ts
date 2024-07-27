import { IngressClient, RoomServiceClient } from 'livekit-server-sdk';

const roomService = new RoomServiceClient(
	process.env.LIVEKIT_API_URL!,
	process.env.LIVEKIT_API_KEY!,
	process.env.LIVEKIT_API_SECRET!,
  );
  
  
  const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL!);
const resetIngress = async (hostIdentity: string) => {
  const rooms = await roomService.listRooms([hostIdentity]);

  const ingresses = await ingressClient.listIngress({
    roomName: hostIdentity,
  });

  for (const room of rooms) {
    await roomService.deleteRoom(room.name);
  }

  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressClient.deleteIngress(ingress.ingressId);
    }
  }
};

export { ingressClient, resetIngress };