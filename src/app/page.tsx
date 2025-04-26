"use client";

import {
  Accordion,
  Box,
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  MantineProvider,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import {
  IconBuildingSkyscraper,
  IconCheck,
  IconClock,
  IconHome,
  IconMail,
  IconMapPin,
  IconPhone,
  IconStar,
  IconWashMachine,
} from "@tabler/icons-react";
import Head from "next/head";
// pages/index.js
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { useState } from "react";

export default function Home() {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      phone: (value) =>
        /^\d{10}$/.test(value) ? null : "Phone must be 10 digits",
    },
  });

  const handleSubmit = () => {
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      notifications.show({
        title: "Thank you!",
        message: "We've received your request and will contact you shortly!",
        color: "teal",
      });
      form.reset();
    }, 1000);
  };

  const services = [
    {
      title: "Residential Cleaning",
      description:
        "Keep your home spotless with our comprehensive residential cleaning services.",
      icon: <IconHome stroke={1.5} />,
      features: [
        "Deep cleaning",
        "Regular maintenance",
        "Move-in/out cleaning",
        "Window washing",
      ],
    },
    {
      title: "Commercial Cleaning",
      description:
        "Professional cleaning solutions for offices, retail spaces, and commercial properties.",
      icon: <IconBuildingSkyscraper stroke={1.5} />,
      features: [
        "Office cleaning",
        "Retail spaces",
        "Medical facilities",
        "Daily/weekly options",
      ],
    },
    {
      title: "Specialized Cleaning",
      description:
        "Expert cleaning for specific needs and challenging situations.",
      icon: <IconWashMachine stroke={1.5} />,
      features: [
        "Post-construction cleanup",
        "Carpet cleaning",
        "Upholstery cleaning",
        "Eco-friendly options",
      ],
    },
    {
      title: "Appliance Cleaning",
      description:
        "Extend the life of your appliances with our thorough cleaning services.",
      icon: <IconWashMachine stroke={1.5} />,
      features: [
        "Oven & range cleaning",
        "Refrigerator cleaning",
        "Washing machine maintenance",
        "Dryer vent cleaning",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "SparkleClean transformed my home! Their attention to detail is outstanding, and my house has never looked better. The team is professional, thorough, and always on time.",
      rating: 5,
    },
    {
      name: "Mike Thomas",
      role: "Office Manager",
      content: `We've been using SparkleClean for our office space for over a year now. Their consistent quality and reliability have made them an indispensable part of our operations.`,
      rating: 5,
    },
    {
      name: "Jennifer Adams",
      role: "Real Estate Agent",
      content:
        "I recommend SparkleClean to all my clients for move-in/move-out cleaning. Their thorough work makes properties show-ready and helps my listings sell faster!",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How often should I schedule a cleaning service?",
      answer:
        "It depends on your specific needs. For regular home maintenance, many clients choose weekly or bi-weekly services. For offices and commercial spaces, daily or several times per week is often appropriate. We can help you determine the best schedule during your consultation.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer: `No, we bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products. If you have specific products you'd prefer us to use due to allergies or preferences, we're happy to accommodate.`,
    },
    {
      question: "How do you price your services?",
      answer:
        "Our pricing is based on the size of the space, type of cleaning required, and frequency of service. We provide free estimates after a brief consultation to understand your specific needs. Regular scheduled cleanings typically cost less than one-time services.",
    },
    {
      question: "Are your cleaning staff insured and bonded?",
      answer:
        "Yes, all our cleaning professionals are fully insured and bonded. We also conduct thorough background checks on all employees for your peace of mind and security.",
    },
    {
      question: `What if I'm not satisfied with the cleaning?`,
      answer: `Your satisfaction is guaranteed! If you're not completely happy with any aspect of our service, please let us know within 24 hours and we'll return to address any areas of concern at no additional cost.`,
    },
  ];

  return (
    <MantineProvider>
      <Head>
        <title>SparkleClean - Professional Cleaning Services</title>
        <meta
          name="description"
          content="Professional residential and commercial cleaning services for your home or business."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Hero Section */}
      <Box pos="relative" style={{ height: "100vh", minHeight: "600px" }}>
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />

        <Container size="lg" h="100%">
          <Box
            py="xl"
            h="100%"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              p="xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: theme.radius.md,
                maxWidth: 600,
              }}
            >
              <Title order={1} c="teal" mb="md">
                SparkleClean
              </Title>
              <Title order={2} mb="lg" size="h3">
                Professional Cleaning Services
              </Title>
              <Text size="lg" mb="xl">
                Transform your space with our premium cleaning services.
                Residential or commercial, we deliver spotless results every
                time.
              </Text>
              <Group>
                <Button
                  color="teal"
                  size="lg"
                  radius="md"
                  component="a"
                  href="#contact"
                >
                  Get a Free Quote
                </Button>
                <Button
                  variant="outline"
                  color="teal"
                  size="lg"
                  radius="md"
                  component="a"
                  href="#services"
                >
                  Our Services
                </Button>
              </Group>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box py={80} bg="gray.0" id="services">
        <Container size="lg">
          <Title order={2} ta="center" mb="xl">
            Our Cleaning Services
          </Title>
          <Text c="dimmed" ta="center" mb={50} maw={700} mx="auto">
            We offer a comprehensive range of cleaning services tailored to meet
            the unique needs of homes and businesses throughout the local area.
          </Text>

          <Grid gutter={40}>
            {services.map((service, index) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 3 }} key={index}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <ThemeIcon size={60} radius="md" color="teal" mb="md">
                    {service.icon}
                  </ThemeIcon>
                  <Title order={3} mb="xs" size="h4">
                    {service.title}
                  </Title>
                  <Text size="sm" mb="md" color="dimmed">
                    {service.description}
                  </Text>
                  <Stack>
                    {service.features.map((feature, index) => (
                      <Group key={index}>
                        <ThemeIcon
                          size="sm"
                          radius="xl"
                          color="teal"
                          variant="light"
                        >
                          <IconCheck size={rem(14)} />
                        </ThemeIcon>
                        <Text size="sm">{feature}</Text>
                      </Group>
                    ))}
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box py={80} bg="teal.0">
        <Container size="lg">
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                radius="md"
                alt="Cleaning professionals at work"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} mb="xl">
                Why Choose SparkleClean?
              </Title>

              <Stack>
                <Group align="flex-start">
                  <ThemeIcon size={42} radius="md" color="teal">
                    <IconStar size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} mb={5}>
                      Experienced Professionals
                    </Text>
                    <Text color="dimmed">
                      Our cleaning teams are highly trained, insured, and
                      background-checked for your peace of mind.
                    </Text>
                  </Box>
                </Group>

                <Group align="flex-start">
                  <ThemeIcon size={42} radius="md" color="teal">
                    <IconStar size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} mb={5}>
                      Eco-Friendly Products
                    </Text>
                    <Text color="dimmed">
                      We use environmentally friendly cleaning solutions that
                      are safe for your family, pets, and the planet.
                    </Text>
                  </Box>
                </Group>

                <Group align="flex-start">
                  <ThemeIcon size={42} radius="md" color="teal">
                    <IconStar size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} mb={5}>
                      100% Satisfaction Guarantee
                    </Text>
                    <Text color="dimmed">
                      If you're not completely satisfied, we'll return and
                      re-clean any areas of concern at no additional cost.
                    </Text>
                  </Box>
                </Group>

                <Group align="flex-start">
                  <ThemeIcon size={42} radius="md" color="teal">
                    <IconStar size={24} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700} mb={5}>
                      Flexible Scheduling
                    </Text>
                    <Text color="dimmed">
                      We work around your schedule to provide cleaning services
                      when it's most convenient for you.
                    </Text>
                  </Box>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={80} bg="gray.0">
        <Container size="lg">
          <Title order={2} ta="center" mb="xl">
            What Our Clients Say
          </Title>

          <Grid gutter={40}>
            {testimonials.map((testimonial, index) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Text size="lg" mb="md">
                    "{testimonial.content}"
                  </Text>
                  <Group mt="auto" justify="space-between">
                    <Box>
                      <Text fw={700}>{testimonial.name}</Text>
                      <Text size="sm" color="dimmed">
                        {testimonial.role}
                      </Text>
                    </Box>
                    <Group>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <IconStar
                          key={i}
                          size={16}
                          fill={theme.colors.yellow[4]}
                          color={theme.colors.yellow[4]}
                        />
                      ))}
                    </Group>
                  </Group>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={80}>
        <Container size="lg">
          <Title order={2} ta="center" mb="xl">
            Frequently Asked Questions
          </Title>

          <Box maw={800} mx="auto">
            <Accordion>
              {faqs.map((faq, index) => (
                <Accordion.Item value={`faq-${index}`} key={index}>
                  <Accordion.Control>
                    <Text fw={600}>{faq.question}</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text>{faq.answer}</Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={80} bg="teal.0" id="contact">
        <Container size="lg">
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} mb="lg">
                Get In Touch
              </Title>
              <Text mb="xl">
                Ready for a cleaner space? Contact us today for a free quote or
                to schedule your cleaning service.
              </Text>

              <Stack mb="xl">
                <Group>
                  <ThemeIcon size="lg" radius="md" color="teal">
                    <IconMapPin size={20} />
                  </ThemeIcon>
                  <Text>123 Cleaning Avenue, Sparkle City, SC 12345</Text>
                </Group>

                <Group>
                  <ThemeIcon size="lg" radius="md" color="teal">
                    <IconPhone size={20} />
                  </ThemeIcon>
                  <Text>(555) 123-4567</Text>
                </Group>

                <Group>
                  <ThemeIcon size="lg" radius="md" color="teal">
                    <IconMail size={20} />
                  </ThemeIcon>
                  <Text>info@sparkleclean.com</Text>
                </Group>

                <Group>
                  <ThemeIcon size="lg" radius="md" color="teal">
                    <IconClock size={20} />
                  </ThemeIcon>
                  <Text>
                    Monday - Friday: 8am - 7pm
                    <br />
                    Saturday: 9am - 5pm
                    <br />
                    Sunday: Closed
                  </Text>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Title order={3} mb="md" size="h4">
                  Request a Free Quote
                </Title>

                <form onSubmit={form.onSubmit(handleSubmit)}>
                  <Stack>
                    <TextInput
                      required
                      label="Name"
                      placeholder="Your name"
                      {...form.getInputProps("name")}
                    />

                    <TextInput
                      required
                      label="Email"
                      placeholder="your.email@example.com"
                      {...form.getInputProps("email")}
                    />

                    <TextInput
                      required
                      label="Phone"
                      placeholder="1234567890"
                      {...form.getInputProps("phone")}
                    />

                    <Textarea
                      label="Message"
                      placeholder="Tell us about your cleaning needs"
                      minRows={4}
                      {...form.getInputProps("message")}
                    />

                    <Button
                      type="submit"
                      color="teal"
                      loading={loading}
                      fullWidth
                    >
                      {loading ? "Sending..." : "Request Quote"}
                    </Button>
                  </Stack>
                </form>
              </Card>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box py={40} bg="gray.8" c="white">
        <Container size="lg">
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
              <Title order={3} size="h4" mb="md">
                SparkleClean
              </Title>
              <Text size="sm" color="gray.5">
                Professional cleaning services for residential and commercial
                spaces. We're dedicated to making your space sparkle!
              </Text>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, sm: 6 }}
              ta={{ base: "left", sm: "right" }}
            >
              <Text size="sm" color="gray.5">
                © {new Date().getFullYear()} SparkleClean. All rights reserved.
              </Text>
              <Text size="sm" color="gray.5" mt="xs">
                Proudly serving Sparkle City and surrounding areas.
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    </MantineProvider>
  );
}
