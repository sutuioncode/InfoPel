import { types } from 'mobx-state-tree';
import { StepModel } from './StepModel';

export const RootModel = types
  .model('StepModel')
  .props({
    steps: types.optional(types.array(StepModel), []),
    numberOfSteps: types.maybeNull(types.number),
    numberOfTopics: types.maybeNull(types.number),
  })
  .actions((self) => ({
    addTopic: (topic: string, stepIndex: number, topicIndex: number) => {
      try {
        self.steps[stepIndex].addTopic(topic, topicIndex);
      } catch (error) {
        console.log(
          '🚀 ----------------------------------------------------------',
        );
        console.log(
          '🚀 ~ file: RootModel.ts ~ line 35 ~ .actions ~ error',
          error,
        );
        console.log(
          '🚀 ----------------------------------------------------------',
        );
      }
    },
    changeNumberOfTopics: (num: number) => {
      try {
        self.numberOfTopics = num;

        if (self.numberOfTopics)
          self.steps.forEach((element) => {
            if (element.topics.length < self.numberOfTopics)
              for (let i = 0; i < self.numberOfTopics; i++) {
                element.addTopic('', i);
              }
          });
      } catch (error) {
        console.log(
          '🚀 ----------------------------------------------------------',
        );
        console.log(
          '🚀 ~ file: RootModel.ts ~ line 33 ~ .actions ~ error',
          error,
        );
        console.log(
          '🚀 ----------------------------------------------------------',
        );
      }
    },
    changeNumberOfSteps: (num: number) => {
      self.numberOfSteps = num;

      if (self.numberOfSteps > self.steps.length)
        for (
          let index = self.steps.length - 1;
          index < self.numberOfSteps;
          index++
        ) {
          try {
            const step = StepModel.create({topics: []});
            self.steps[index] = step;
            for (let i = 0; i < self.numberOfTopics; i++) {
              step.addTopic('', i);
            }
          } catch (error) {
            console.log(
              '🚀 ----------------------------------------------------------',
            );
            console.log(
              '🚀 ~ file: RootModel.ts ~ line 69 ~ .actions ~ error',
              error,
            );
            console.log(
              '🚀 ----------------------------------------------------------',
            );
          }
        }
    },
  }))
  .views((self) => ({
    stepTopics: (stepNumber: number) => {
      return self.steps[stepNumber].topics.slice(
        0,
        self.numberOfTopics ?? undefined,
      );
    },
  }));
