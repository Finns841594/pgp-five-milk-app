import { Card, Grid, Row } from "@nextui-org/react"
import milkPNG from "../milk.png"
import { fetchMilk } from "./utilities"
import { Milk } from "../types"
import { useState, useEffect } from "react"

import { selectMilks, setMilks } from "../milkSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const MilkCards = () => {
  const [milkCount, setMilkCount] = useState<number>(0)
  const [pages, setPages] = useState<number>(1)

  const milksFromRedux = useAppSelector(selectMilks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchMilk().then((milks) => {
      dispatch(setMilks(milks))
      setMilks(milks.results)
      setMilkCount(milks.count)
      setPages(milks.count / 9)})
  }, [])

  // const milkList = [1,2,3,4,5,6,7,8,9]

  return (
    <div className="px-10">
      <h3>{milkCount} products</h3>
      {milksFromRedux.count > 0 && <h4>Test: {milksFromRedux.results[0].id}</h4>}
      <Grid.Container gap={2} justify="space-evenly">
        {milksFromRedux.results.map((milk, index) => (
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
                <Row justify="space-between">
                  <p>{milk.type}</p>
                  <p>Storage: {milk.storage}</p>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          ))}
      </Grid.Container>
      <div>
        <p>Pages: {pages}</p>
      </div>
    </div>
  )
}