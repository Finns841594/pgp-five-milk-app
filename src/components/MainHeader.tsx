import { Button, Dropdown, Link, Navbar, Text } from "@nextui-org/react";
import userIcon from '../userIcon.svg'
import { useEffect, useState, Key } from "react";
import { fetchMilkTypes } from "./utilities";
import { useAppDispatch, useAppSelector } from "../hooks";

export const MainHeader = () => {
  const [milkTypes, setMilkTypes] = useState<string[]>([])
  const [selectedMilkType, setSelectedMilkType] = useState<string>("")

  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchMilkTypes().then((milkTypes) => setMilkTypes(milkTypes))
  }, [])

  const selectHandler = (key:Key) => {
    setSelectedMilkType(key as string)
  }

  return (
    <div>
      <Navbar isBordered variant='sticky'>
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

          <Navbar.Link href="#">All Products</Navbar.Link>

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button auto light css={{ px:0, dflex:"center", svg:{ pe:"none"}}}>By Types</Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu css={{ tt: "capitalize" }} selectionMode="single" selectedKeys={selectedMilkType} onAction={ (key:Key) => selectHandler(key)}>
              {milkTypes.map((milkType, index) => (
                <Dropdown.Item key={index}>{milkType}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Navbar.Link href="#">Search</Navbar.Link>

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