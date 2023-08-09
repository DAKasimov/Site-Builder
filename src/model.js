import image from "../assets/image.jpg"
import { Block, Text, Columns, Image } from "../classes/blocks"

export const model = [
  new Block("title", "Конструктор сайтов на JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new Text("text", "Тренировочный проект на чистом JavaScript", {
    styles: {
      "text-align": "center",
      "font-size": "20px",
    },
  }),
  new Columns("column",["1111", "2222", "3333", "4444", "5555"] ),
  new Image("image", image, {
    styles: {
      height: "600px",
      width: "700px",
      top: 0,
      left: 0,
      margin: "auto",
    },
  }),
]
