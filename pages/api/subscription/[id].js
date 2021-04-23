export default function subscriptionHandler(req, res) {
  res.status(200).json({
    id: 1,
    name: "Hulu",
    website: "www.hulu.com",
    price: 11.99,
    billingPlan: "monthly",
    active: true,
    renewalDate: "05/01/2021",
  });
}
