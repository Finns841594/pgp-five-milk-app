import { Link, useParams } from "react-router-dom"
import { MainHeader } from "../components/MainHeader"
import { useAppSelector } from "../hooks"
import { selectMilks } from "../milkSlice"
import { useEffect, useState } from "react"
import { Milk } from "../types"
import { Card, Col, Row, Button, Text, Modal, Image } from "@nextui-org/react"
import { Slider } from "@mui/material"
import milkPNG from "../milk.png"

export const Product = () => {
  const [currentMilk, setCurrentMilk] = useState({} as Milk)
  const [visible, setVisible] = useState(false)

  const milksFromRedux = useAppSelector(selectMilks)
  const { id } = useParams()
  const currentMilkInfo = milksFromRedux.results.find(milk => milk.id === id)
  if (currentMilkInfo) {
    setCurrentMilk(currentMilkInfo)
  }

  useEffect(() => {
    fetch(`http://localhost:3002/api/milks/id/${id}`).then(res => res.json()).then(data => setCurrentMilk(data))
  },[])

  const closeHandler = () => {
    setVisible(false)
  }

  return (
    <>
      <MainHeader />
      <p>Product Info: {id}</p>
      <p>{currentMilk?.name}</p>
      <p>{currentMilk?.type}</p>
      <p>{currentMilk?.storage}</p>

      <div className="w-3/4">
        <Card css={{ w: "100%", h: "400px" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text size={12} weight="bold" transform="uppercase" color="ffffffAA">
                {currentMilk?.type}
              </Text>
              <Text h3 color="secondary">
                {currentMilk?.name}
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 72 }}>
            <Card.Image
              src={milkPNG}
              objectFit="contain"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#0f111466",
              borderTop: "$borderWeights$light solid $gray800",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Text color="#d1d1d1" size={12}>
                      Storage:
                    </Text>
                    <Text color="white" size={16}>
                      {currentMilk?.storage}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Slider
                  aria-label="order volume"
                  size="small"
                  defaultValue={0}
                  max={currentMilk?.storage}
                  valueLabelDisplay="auto"  
                  color="secondary"
                />
              </Col>
              <Col>
                <Row justify="flex-end">
                  <Button
                    flat
                    auto
                    rounded
                    color="secondary"
                    onClick={() => setVisible(true)}
                  >
                    <Text
                      css={{ color: "inherit" }}
                      size={12}
                      weight="bold"
                      transform="uppercase"
                    >
                      Order
                    </Text>
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </div>

      <Modal noPadding open={visible} onClose={closeHandler}>
        <Modal.Header
          css={{ position: "absolute", zIndex: "$1", top: 10, left: 16 }}
        >
          <Text color="white" size={20} >
            Thank you for your order!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            showSkeleton
            src="https://images.unsplash.com/photo-1550630997-aea8d3d982ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            objectFit="fill"
            width={400}
            height={490}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}