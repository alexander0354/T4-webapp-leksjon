import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
//import { dadJokes } from "./data"

const app = new Hono();

/*app.use(cors({
    origin: "*",
})
);*/

app.use('*', cors());

const dadJokes = [ 
  {
    id: 1,
    title: "Why don't scientists trust atoms?",
    answer: "Because they make up everything!"
  },
  {
    id: 2,
    title: "What do you call a fake noodle?",
    answer: "An impasta!"
  },
  {
    id: 3,
    title: "Why did the scarecrow win an award?",
    answer: "He was outstanding in his field!"
  },
  {
    id: 4,
    title: "How do you organize a space party?",
    answer: "You planet!"
  },
  {
    id: 5,
    title: "What do you call a bear with no teeth?",
    answer: "A gummy bear!"
  }
];

//export const dadJokes: string[];

/*app.get('/', (c) => {
return c.json(dadJokes);
});*/
app.get('/', (c) => {
  return c.json(dadJokes); 
})

app.post('/jokes', async (c) => {
    const body = await c.req.json()
    dadJokes.push(body)
    return c.json(dadJokes)
    
  });

const port = 3000;

console.log(`server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port,
  });