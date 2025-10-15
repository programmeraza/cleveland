import * as React from "react";
import MuiAccordion, { accordionClasses as muiAccordionClasses } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, { accordionDetailsClasses as muiAccordionDetailsClasses } from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import "./Accordion.scss";

const steps = [
  {
    title: "Скрининг заявки HR и хайринг-менеджером",
    text: "После подачи заявки её проверяют HR и руководитель направления. На этом этапе оценивается соответствие базовым требованиям: образование, опыт работы, навыки и мотивация.",
  },
  {
    title: "Интервью (HR и профессиональное)",
    text: "Проводится собеседование с HR и профильным специалистом. Для клинических позиций предусмотрен дополнительный этап — решение кейса или участие в симуляции.",
  },
  {
    title: "Проверка рекомендаций и документов/сертификатов",
    text: "Мы тщательно проверяем подлинность документов, лицензий, дипломов и сертификатов, а также связываемся с рекомендателями кандидата.",
  },
  {
    title: "Решение комиссии и Job Offer",
    text: "Заявка выносится на комиссию, в которую входят HR и руководители подразделений. После успешного прохождения этапов кандидат получает предложение.",
  },
  {
    title: "Онбординг",
    text: "Оформление на работу, вводный тренинг по стандартам качества и безопасности, а также закрепление наставника.",
  },
];

export default function Accordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  return (
    <div className="accordion-block">
      <div className="container">
        <h1>Этапы отбора</h1>
        <div className="accordion-block__wrapper">
          {steps.map((step, index) => (
            <MuiAccordion
              key={index}
              expanded={expanded === index}
              onChange={handleExpansion(index)}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 400 }}
              sx={[
                expanded === index
                  ? {
                    [`& .${muiAccordionClasses.region}`]: { height: "auto" },
                    [`& .${muiAccordionDetailsClasses.root}`]: { display: "block" },
                  }
                  : {
                    [`& .${muiAccordionClasses.region}`]: { height: 0 },
                    [`& .${muiAccordionDetailsClasses.root}`]: { display: "none" },
                  },
              ]}
            >
              <AccordionSummary
                expandIcon={<img src="./arrow.svg" alt="arrow" className="accordion-arrow"/>}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                className="accordion-block__summary"
              >
                <Typography component="span" className="accordion-block__title">
                  {step.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="accordion-block__details">
                <Typography>{step.text}</Typography>
              </AccordionDetails>
            </MuiAccordion>
          ))}
        </div>
      </div>
    </div>
  );
}
