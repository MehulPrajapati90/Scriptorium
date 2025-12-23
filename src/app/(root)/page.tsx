import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';

const page = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <SignedIn>
        <UserButton />
        <Button asChild variant={"destructive"}>
          <SignOutButton />
        </Button>
      </SignedIn>

      <SignedOut>
        <Button asChild>
          <SignInButton mode='modal' />
        </Button>
        <Button asChild variant={"outline"}>
          <SignUpButton mode='modal' />
        </Button>
      </SignedOut>
    </div>
  )
}

export default page;