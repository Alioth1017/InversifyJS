import { expect } from 'chai';

import { id } from '../../utils/id';

describe('ID', () => {
  it('Should be able to generate an id', () => {
    const id1: number = id();
    expect(id1).to.be.a('number');
  });
});