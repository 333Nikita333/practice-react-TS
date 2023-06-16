import { Component } from 'react';
import { IAppProps } from '../interfaces/interfaces';
import { FeedbackOptions } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component<object, IAppProps> {
  state: IAppProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = e.currentTarget.textContent;

    this.setState(prevState => {
      const prevGrades = { ...prevState };

      switch (buttonText) {
        case 'Good':
          prevGrades.good += 1;
          break;

        case 'Neutral':
          prevGrades.neutral += 1;
          break;

        case 'Bad':
          prevGrades.bad += 1;
          break;

        default:
          console.log('Something wrong');
          return prevState;
      }

      return prevGrades;
    });
  };

  countTotalFeedback = (): number => {
    const arrFeedback = Object.values(this.state);
    const sumFeedback = arrFeedback.reduce((sum, elem) => sum + elem, 0);
    return sumFeedback;
  };

  countPositiveFeedbackPercentage = (): number => {
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback <= 0) {
      return 100;
    }

    const positiveProcentageFeedbacks = (this.state.good / totalFeedback) * 100;

    return Math.round(positiveProcentageFeedbacks);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options: string[] = ['Good', 'Neutral', 'Bad'];

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
