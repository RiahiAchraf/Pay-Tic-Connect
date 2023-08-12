import ToggleTheme from './ToggleTheme';

const Header = () => {
  return (
    <>
      <header className='mx-auto max-w-6xl  px-5 py-12 sm:p-12'>
        <nav className='flex justify-between border-b pb-5 dark:border-gray-g9/20'>
          <div className='z-10 flex items-center font-semibold capitalize'>Pay tic connect</div>
          <div className='flex items-center gap-4'>
            <ToggleTheme className='mt-1 ' />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
