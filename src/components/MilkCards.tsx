import { Card, Grid } from "@nextui-org/react"
import milkPNG from "../milk.png"
import { fetchMilk } from "./utilities"
import { Milk } from "../types"
import { useState, useEffect } from "react"

export const MilkCards = () => {
  const [milkList, setMilkList] = useState<Milk[]>([])

  useEffect(() => {
    fetchMilk().then((milkList) => setMilkList(milkList.results))
  }, [])

  // const milkList = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="px-10">
      <Grid.Container gap={2} justify="space-evenly">
        {milkList.map((milk, index) => (
          <Grid xs={12} md={6} lg={4} key={index}>
            <Card css={{ mw:"300px" }}>
              <Card.Image 
                src={milkPNG}
              />
              <Card.Divider />
              <Card.Body>
                <h4>{milk.name}</h4>
              </Card.Body>
              <Card.Footer>
                <p>Card Footer</p>
              </Card.Footer>
            </Card>
          </Grid>
          ))}
          </Grid.Container>
    </div>
  )
}