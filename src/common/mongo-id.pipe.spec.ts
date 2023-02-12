import { MongoIdPipe } from './mongo-id/mongo-id.pipe';

describe('MongoIdPipe', () => {
  it('should be defined', () => {
    expect(new MongoIdPipe()).toBeDefined();
  });
});
