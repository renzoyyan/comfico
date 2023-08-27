import { Login } from '@/modules/auth';
import HeroImg from '@/shared/assets/images/hero-image.jpg';
import { Logo } from '@/shared/components/partials';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <section className="grid h-screen md:grid-cols-2">
      <div className="flex flex-col">
        <div className="ml-[3vw] mt-6">
          <Logo />
        </div>
        <div className="flex-1">
          <Login />
        </div>
      </div>
      <div className="relative hidden h-full w-full md:block">
        <Image
          src={HeroImg}
          fill
          alt="comfico"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </section>
  );
};

export default LoginPage;
