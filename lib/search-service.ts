import { db } from '@/lib/db'
import { getSelf } from '@/lib/auth-service'


export async function getSearch(term?: string) {
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
					NOT: {
						blocking: {
							some: {
								blockedId: userId
							}
						}
					}
				},