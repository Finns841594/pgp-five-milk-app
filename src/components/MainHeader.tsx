import { Button, Dropdown, Input, Link, Navbar, Text } from "@nextui-org/react";
import { useEffect, useState, Key } from "react";
import { fetchMilkTypes } from "./utilities";

import { updateMilksBySearch, updateMilksByType, updateMilksByTypeAndPage } from "../milkSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const MainHeader = () => {
  const [milkTypes, setMilkTypes] = useState<string[]>([])
  // const [selectedMilkType, setSelectedMilkType] = useState<string>("All")
  const [searchValue, setSearchValue] = useState<string>("")

  const dispatch = useAppDispatch()

  // Should I move this to redux store?
  useEffect(() => {
    fetchMilkTypes().then((milkTypes) => setMilkTypes(['All'].concat(milkTypes)))
  }, [])

  const selectHandler = (key:Key) => {
    // setSelectedMilkType(key as string)
    dispatch(updateMilksByTypeAndPage({milkType: key as string, page:1}))
  }

  // ❗️Need to fix this any type when I have time
  const searchHandler = (e:any) => {
    dispatch(updateMilksBySearch(searchValue))
  }

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

        <Navbar.Content hideIn="xs">

          <Dropdown isBordered>
            <Navbar.Item>
              <Dropdown.Button auto light css={{ px:0, dflex:"center", svg:{ pe:"none"}}}>By Types</Dropdown.Button>
            </Navbar.Item>
            <Dropdown.Menu css={{ tt: "capitalize" }} selectionMode="single" onAction={ (key:Key) => selectHandler(key)}>
              {milkTypes.map((milkType, index) => (
                <Dropdown.Item key={milkType}>{milkType}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {/* <Navbar.Link href="#">{selectedMilkType}</Navbar.Link> */}

          <Navbar.Item>
            <Input clearable contentRight={
              <Button auto flat color="secondary" onClick={e => searchHandler(e)}>Search</Button>
            } 
            placeholder="find milk by name ..." onChange={(e) => setSearchValue(e.currentTarget.value)}/>
          </Navbar.Item>
          {/* <p>{searchValue}</p> */}

        </Navbar.Content>

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