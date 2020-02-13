function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function (...args){
  const res = await fetch(...args)
  await timeout(2000)
  return res.json()
}