import { Button, Link, Navbar, Text } from "@nextui-org/react";


export const SimpleHeader = () => {

  return (
    <div>
      <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          <a href="/">
            <Text h1 size={38}
              css={{
                textGradient: "45deg, $purple600 -10%, $pink600 150%",
              }}
              weight="bold"
            >
              Fresh Milk Shop
            </Text>
          </a>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#" color="secondary">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}