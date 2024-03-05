export default function (fn) {
  return () => {
    fn().catch((err) => console.log(err));
  };
}
