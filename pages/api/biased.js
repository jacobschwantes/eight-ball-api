import getReply from "./_utils/getReply";

export default function handler(req, res) {
    const response = getReply(true, req.query.question, req.query.lucky)
    res.setHeader('Content-Type', 'application/json');
    res.json(response);
  }