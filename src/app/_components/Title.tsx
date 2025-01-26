type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <h1 className="text-xl font-bold mb-4">{children}</h1>;
};

export default Title;
