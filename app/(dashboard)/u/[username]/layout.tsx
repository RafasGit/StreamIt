import { getSelfByUsername } from '@/lib/auth-service';
//import { getUserByUsername } from '@/lib/user-service'
import { currentUser } from '@clerk/nextjs'
// import { Children } from 'react'
import { redirect } from 'next/navigation';
import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';
import { Container } from './_components/container';
interface   CreatorLayoutProps {
     params: {username: string};
        children: React.ReactNode;
    
};



const CreatorLayout = async ({
    params,
    children,
}: CreatorLayoutProps) => {
    const self = await getSelfByUsername(params.username);

    if (!self) {
        redirect("/");
    }


return  (
    <>
    <Navbar />
    <div className='flex h-full pt-20'>
        <Sidebar />
        <Container>
        {children}
        </Container>
       
    </div>
    </>
    
);
}

export default CreatorLayout;






// interface CreatorPageProps {
// 	params: {
// 		username: string
// 	}
// }

// export default async function CreatorPage({ params }: CreatorPageProps) {
// 	const externalUser = await currentUser()
// 	const user = await getUserByUsername(params.username)
// 	if (!user || user.externalUserId !== externalUser?.id || !user.stream) {
// 		throw new Error('Unauthorized')
// 	}
// 	return (
// 		<div className='h-full'>
// 			<StreamPlayer user={user} stream={user.stream} isFollowing />
// 		</div>
// 	)
// }