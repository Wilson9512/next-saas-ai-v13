import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LangingPage = () => {
  return (<>
    <div>LangingPage</div>
    <Link href="/sign-in">
      <Button>
        Login in
      </Button>
    </Link>
    <Link href="/sign-up">
      <Button>
        Sign up
      </Button>
    </Link>
  </>
  );
};

export default LangingPage;