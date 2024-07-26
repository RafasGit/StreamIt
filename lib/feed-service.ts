import { db } from "./db";
import { getSelf } from "./auth-service";

export async function getStreams() {
    let userId

    try {
		const self = await getSelf()
		userId = self.id
	} catch {
		userId = null
	}
	let streams = []
	if (userId) {
		streams = await db.stream.findMany({
			where: {
				user: {
					AND: [
						{
							NOT: {
								id: userId
							}
						},
						{
							NOT: {
								followedBy: {
									some: {
										followerId: userId
									}
								}
							}
						},
						{
							NOT: {
								blocking: {
									some: {
										blockedId: userId
									}
								}
							}
						}
					]
				}
				
			
			},
			select: {
				id: true,
				user: true,
				isLive: true,
				name: true,
				thumbnailUrl: true
			},
			orderBy: [
				{
					isLive: 'desc'
				},
				{
					updatedAt: 'desc'
				}
			]
		})
	} else {
		streams = await db.stream.findMany({
			select: {
				id: true,
				user: true,
				isLive: true,
				name: true,
				thumbnailUrl: true
			},
			orderBy: [
				{
					isLive: 'desc'
				},
				{
					updatedAt: 'desc'
				}
			]
		})
	}
	return streams
}

// NOT: {
// 						blocking: {
// 							some: {
// 								blockedId: userId
// 							}
// 						}
// 					}