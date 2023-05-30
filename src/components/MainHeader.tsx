import { Button, Link, Navbar, Text } from "@nextui-org/react";
import userIcon from '../userIcon.svg'

export const MainHeader = () => {
  return (
    <div>
      <Navbar isBordered >
        <Navbar.Brand>
          <Text h1 size={38}
            css={{
              textGradient: "45deg, $purple600 -10%, $pink600 150%",
            }}
            weight="bold"
          >
            Fresh Milk Shop
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </div>
  );
}