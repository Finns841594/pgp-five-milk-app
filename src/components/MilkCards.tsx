import { Card, Grid, Row, Pagination } from "@nextui-org/react"
import milkPNG from "../milk.png"
import { fetchMilk } from "./utilities"
import { useState, useEffect } from "react"

import { initialMilks, selectMilks, setMilks, updateMilksByPage } from "../milkSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const MilkCards = () => {

  const milksFromRedux = useAppSelector(selectMilks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initialMilks())
  }, [])

  // const milkList = [1,2,3,4,5,6,7,8,9]
  const pageHandler = (page:number) => {
    dispatch(updateMilksByPage(page))
  }

  return (
    <div className="px-10 mx-10">
      <h3>We have {milksFromRedux.count} products</h3>
      {/* {milksFromRedux.count > 0 && <h4>Test: {milksFromRedux.results[0].id}</h4>} */}
      <Grid.Container gap={3} justify="flex-start">
        {milksFromRedux.results.map((milk, index) => (
          <Grid lg={3} key={index}>
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
        <Pagination total={Math.ceil(milksFromRedux.count / 9)} initialPage={1} color='secondary' shadow onChange={(page:number) => pageHandler(page)} />
      </div>
    </div>
  )
}