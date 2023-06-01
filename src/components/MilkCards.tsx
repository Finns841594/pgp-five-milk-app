import { Card, Grid, Row, Pagination } from "@nextui-org/react"
import milkPNG from "../milk.png"
import { useEffect } from "react"

import { initialMilks, selectMilks, updateMilksByPage } from "../milkSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

export const MilkCards = () => {

  const milksFromRedux = useAppSelector(selectMilks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initialMilks())
  }, [])

  const pageHandler = (page:number) => {
    dispatch(updateMilksByPage(page))
  }

  return (
    <div className="lg:w-10/12 w-full mx-auto flex flex-col justify-center">
      <h3 className="ml-6 mt-12">We have {milksFromRedux.count} products</h3>
      {/* {milksFromRedux.count > 0 && <h4>Test: {milksFromRedux.results[0].id}</h4>} */}
      <Grid.Container gap={3} justify="space-around">
        {milksFromRedux.results.map((milk, index) => (
          <Grid lg={4} key={index}>
            <a href={`/product/${milk.id}`}>
              <Card css={{ mw:"300px" }} isPressable >
                <Card.Image 
                  src={milkPNG}
                  css={{ padding: "10px" }}
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
            </a>
          </Grid>
          ))}
      </Grid.Container>
      <div className="w-full my-16 flex flex-row justify-center">
        <Pagination total={Math.ceil(milksFromRedux.count / 9)} initialPage={1} color='secondary' shadow onChange={(page:number) => pageHandler(page)} />
      </div>
    </div>
  )
}