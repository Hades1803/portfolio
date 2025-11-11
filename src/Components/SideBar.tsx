import { Burger, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { navLinks } from './Header';

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root
        opened={opened}
        onClose={toggle}
        position="left"
        size="50vw"
        className="md:hidden !-z-10"
      >
        <Drawer.Overlay backgroundOpacity={0.5} blur={4} className='!-z-0' />

        <Drawer.Content bg="#0A192f" className='!-z-0'>
          <Drawer.Header bg="#0A192f">

          </Drawer.Header>

          <Drawer.Body
            bg="#0A192f"
            className="mt-24 flex flex-col items-center gap-8 text-xl font-mono"
          >
            {navLinks().map((link, i) => (
              <div
                key={i}
                className="group cursor-pointer transition-all duration-300 hover:translate-x-1 "
              >
                <a
                  href={`#${link.props.children[1]}`} 
                  className="text-textColor hover:text-primaryColor flex items-center gap-2"
                >
                  <span className="text-primaryColor">0{i + 1}.</span>
                  {link.props.children[1]}
                </a>
                <div className="h-[1px] w-0 group-hover:w-full bg-primaryColor transition-all duration-300 mt-1"></div>
              </div>
            ))}
          </Drawer.Body>

        </Drawer.Content>
      </Drawer.Root>
      <Burger className='md:!hidden !z-10' size="lg" color='#64FFDA' opened={opened} onClick={toggle} />
    </>
  );
};

export default SideBar;
