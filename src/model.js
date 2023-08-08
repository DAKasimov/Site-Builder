import image from '../assets/image.jpg'

export const model = [
    {
      type: "title",
      value: "Конструктор сайтов на JavaScript",
      options : {
        tag : 'h2',
        // styles : `background: linear-gradient(to right, #ff0099, #493240); color: #fff`,
        styles : {
            background : 'linear-gradient(to right, #ff0099, #493240)',
            color : '#fff',
            'text-align' : 'center',
            'padding' : '1.5rem'
        }
      }
    },
    {
      type: "text",
      value:
        "value text sndvlnsdlvndlbnkl sndvbndfklbknd jsnsdnlfbnkdfjnbdnfbkndjkbnjkdnbjkdnk",
    },
    {
      type: "column",
      value: ["1111", "2222", "3333", "4444 "],
    },
    {
      type : "image",
      value : image
    }
  ]