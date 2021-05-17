import {shortenText} from '../utils/functions' 
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test('shortenText will not alter string under 100 chars', ()=>{
    expect(shortenText(shortText)).toBe(shortText);
})

test('shortenText can shorten text over 100 chars', ()=>{
    const shortened = shortenText(longText);
    const lastThree = shortened.slice(shortened.length - 3)
    expect(shortened.length).toBeLessThan(103);
    expect(lastThree).toBe('...');
})
test('wordCount can return an accurate word word', ()=>{
    expect(wordCount(posts)).toBe(233)
})
test('attachUserName attaches users name', ()=>{
    const testPosts = attachUserName(users, posts);
    expect(testPosts[0]).toHaveProperty('displayName');
})
test('attachUserName removes posts that dont contain users', () => {
    const testPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(testPosts).not.toContainEqual(deletedPost);
  });