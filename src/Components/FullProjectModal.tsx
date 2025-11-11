import { Modal, Button, Text, Image, Group, Badge, ScrollArea } from '@mantine/core'

interface FullProjectModalProps {
  opened: boolean
  close: () => void
  project: {
    title: string
    desc: string
    image: string
    live: string
    technologies: string[]
    github: string
  }
}

const FullProjectModal = ({ opened, close, project }: FullProjectModalProps) => {
  if (!project) return null

  return (
    <Modal.Root opened={opened} onClose={close} className='font-mono' size="70%" scrollAreaComponent={ScrollArea.Autosize}>
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className='!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl'>
          <Modal.Title className='!text-4xl !text-white font-bold'>{project.title}</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-2 !rounded-bl-3xl !rounded-br-3xl">
          <Image src={project.image} alt={project.title} className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA]" />
          <Group gap="xs" wrap="wrap" className='my-6'>
            {project.technologies.map((tech, i) => (
              <Badge key={i} color="#64FFDA" variant="light" size='xl'>
                {tech}
              </Badge>
            ))}
          </Group>
          <Text className='!text-justify' size='lg' c="dimmed">{project.desc}</Text>
          

          <Group mt="md" grow>
            <Button component="a" href={project.live} target="_blank" color="#64FFDA" className='!text-bgColor' radius="md">
              View Live App
            </Button>
            <Button component="a" href={project.github} target="_blank" color="#64FFDA"  variant="outline" radius="md">
              Source Code
            </Button>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default FullProjectModal
