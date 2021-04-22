
const a = '#노드,#익스프레스'
const hashtags = a.match(/#[^\s#]*/g); // #으로시작해서 띄어쓰기와 #을 제외하고 모두 골라라
console.log(hashtags);
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          return Hashtag.findOrCreate({
            where: { title: tag.slice(1).toLowerCase() },
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0]));
    }
    
