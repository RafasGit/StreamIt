import { Loader } from 'lucide-react'
import { Loader2 } from 'lucide-react'

interface LoadingVideoProps {
	label: string
}

export function LoadingVideo({ label }: LoadingVideoProps) {
	return (
		<div className='h-full flex flex-col space-y-4 justify-center items-center'>
			<Loader className='h-10 w-10 text-muted-foreground animate-pulse' />
			<p className='text-muted-foreground capitalize'>{label}</p>
		</div>
	)
}