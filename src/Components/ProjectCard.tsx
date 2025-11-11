import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import FullProjectModal from './FullProjectModal'

interface ProjectProps {
    title: string
    desc: string
    image: string
    live: string
    technologies: string[]
    link: string
    github: string
}

const ProjectCard = ({ title, desc, image, live, technologies, link, github }: ProjectProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">
            <Card
                onClick={open}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                w="375px"
                className="
        !bg-bgColor 
        !border-primaryColor 
        border-2 
        mt-6
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-[1.03] 
        hover:shadow-[0_0_15px_#64FFDA50]
        hover:border-[#64FFDA]
        hover:cursor-pointer
      "
            >
                {/* Hình ảnh */}
                <Card.Section className="p-3">
                    <Image
                        src={image}
                        height={180}
                        alt={title}
                          className="!rounded-xl transition-transform duration-300 hover:scale-[1.02] w-full object-cover"
                    />
                </Card.Section>

                {/* Tiêu đề và công nghệ */}
                <Group justify="space-between" mt="xs" mb="xs">
                    <Text fw={600} className="!text-2xl !font-bold !text-white" lineClamp={1}>
                        {title}
                    </Text>
                    <Badge color="teal" variant="light">
                        {technologies[0]}
                    </Badge>
                </Group>

                {/* Mô tả ngắn */}
                <Text size="sm" c="dimmed" className="!text-justify" mb="md" lineClamp={3}>
                    {desc}
                </Text>

                {/* Danh sách công nghệ */}
                <Group gap="xs" mb="md" wrap="wrap">
                    {technologies.slice(1).map((tech, index) => (
                        <Badge key={index} color="#64FFDA" variant="outline">
                            {tech}
                        </Badge>
                    ))}
                </Group>

                <Button onClick={open} className='!bg-primaryColor !text-bgColor' fullWidth mt="md">Show more</Button>
            </Card>
            <FullProjectModal
                opened={opened}
                close={close}
                project={{ title, desc, image, live, technologies, github }}
            />
        </div>
    )
}

export default ProjectCard
