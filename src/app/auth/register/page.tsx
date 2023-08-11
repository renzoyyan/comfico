import Image from 'next/image';

import { Register } from '@/modules/auth';
import { Logo } from '@/shared/ui/partials';
import HeroImg from '@/shared/assets/images/hero-image.jpg';

const RegisterPage = () => {
  return (
    <section className="grid h-screen grid-cols-2">
      <div className="flex flex-col">
        <div className="ml-[3vw] mt-6">
          <Logo />
        </div>
        <div className="flex-1">
          <Register />
        </div>
      </div>
      <div className="relative h-full w-full">
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

export default RegisterPage;
