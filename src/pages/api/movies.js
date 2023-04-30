export default async function handler(req, res) {
    const response = await fetch("https://run.mocky.io/v3/a6fc5e55-05ac-4b9b-8506-78186842b47c");
    const data = await response.json();
    res.status(200).json(data);
  }
  