import { UserNavbar } from '@/shared/components/partials';
import { CircularLoader } from '@/shared/components/ui/circular-loader';

const Loading = () => {
  return (
    <>
      <UserNavbar />

      <div className="grid h-[80vh] place-content-center">
        <CircularLoader className="text-brand-1" />
      </div>
    </>
  );
};

export default Loading;
