interface JumbotronProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
  }

  export const Jumbotron = (props: JumbotronProps) => {
    const bgStyle = props.style ?? { backgroundColor: "transparent" };
    return (
      <div id={props.id} className={`py-1 ${props.className}`} style={{...bgStyle }}>
        <div className="container py-3">
          {props.children}
        </div>
      </div>
    );
  }