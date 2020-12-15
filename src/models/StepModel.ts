import { types } from 'mobx-state-tree';

export const TopicModel = types.model('TopicModel').props({
  text: types.string,
  id: types.number,
});

export const StepModel = types
  .model('StepModel')
  .props({
    topics: types.optional(types.array(TopicModel), []),
  })
  .actions((self) => ({
    addTopic: (topic: string, index: number) => {
      self.topics.push({id: index, text: topic});
    },
  }));
