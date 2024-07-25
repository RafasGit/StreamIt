import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { db } from '@/lib/db'
import { getSelf } from '@/lib/auth-service'

const f = createUploadthing()


// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {

    // Define as many FileRoutes as you like, each with a unique routeSlug
	thumbnailUploader: f({
		image: {
			maxFileSize: '4MB',
			maxFileCount: 1
		}
	})

     // Set permissions and file types for this FileRoute
		.middleware(async () => {
			const self = await getSelf()
			return { user: self }
		})

      // Whatever is returned here is accessible in onUploadComplete as `metadata   
		.onUploadComplete(async ({ metadata, file }) => {
			await db.stream.update({
				where: {
					userId: metadata.user.id
				},
				data: {
					thumbnailUrl: file.url
				}
			})
			return { fileUrl: file.url }
		})
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter