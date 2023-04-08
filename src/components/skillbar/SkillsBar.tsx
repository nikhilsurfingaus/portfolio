import ProgressBar from "react-bootstrap/ProgressBar";

interface SkillsBarProps {
    skill: string;
    value: number;
    isScrolled: boolean;
}

  export const SkillsBar = ({ skill, value, isScrolled }: SkillsBarProps) => {
    return (
      <div style={{ width: "95%" }}>
        <p className="lead text-white mb-0 mt-1">{skill}</p>
        <ProgressBar
          className={!isScrolled ? "progress" : " progress-bar-animation"}
          now={value}
        />
      </div>
    );
  }