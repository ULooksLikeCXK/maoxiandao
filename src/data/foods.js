const FOODS = [
  // 川菜
  { id: 'gongbao-chicken', name: '宫保鸡丁', emoji: '🍗', category: '川菜', rarity: 'common', description: '鸡肉嫩滑，花生香脆，麻辣鲜香一口入魂', tags: ['辣', '下饭', '经典'] },
  { id: 'mapo-tofu', name: '麻婆豆腐', emoji: '🫘', category: '川菜', rarity: 'common', description: '麻辣烫香，嫩豆腐在舌尖化开的幸福', tags: ['辣', '麻', '下饭'] },
  { id: 'shuizhu-roupian', name: '水煮肉片', emoji: '🥩', category: '川菜', rarity: 'rare', description: '滚烫红油浇下的一瞬间，整个灵魂都在颤抖', tags: ['辣', '硬菜', '过瘾'] },
  { id: 'huiguorou', name: '回锅肉', emoji: '🥓', category: '川菜', rarity: 'common', description: '川菜之魂，肥而不腻，每一片都是经典', tags: ['微辣', '经典', '下饭'] },
  { id: 'fuqi-feipian', name: '夫妻肺片', emoji: '🐂', category: '川菜', rarity: 'rare', description: '麻辣鲜香薄如蝉翼，一口就上瘾', tags: ['辣', '凉菜', '经典'] },
  { id: 'dan-dan-mian', name: '担担面', emoji: '🍜', category: '川菜', rarity: 'common', description: '肉末芽菜花生碎，拌开的瞬间香到天灵盖', tags: ['辣', '面食', '街头'] },

  // 粤菜
  { id: 'baiqie-ji', name: '白切鸡', emoji: '🐔', category: '粤菜', rarity: 'common', description: '皮爽肉滑，蘸上姜葱油，简单即是极致', tags: ['清淡', '经典', '鲜'] },
  { id: 'char-siu', name: '蜜汁叉烧', emoji: '🍖', category: '粤菜', rarity: 'rare', description: '外焦里嫩，蜜汁的甜与肉的焦香完美交织', tags: ['甜', '烧腊', '经典'] },
  { id: 'har-gow', name: '水晶虾饺', emoji: '🥟', category: '粤菜', rarity: 'rare', description: '半透明的皮包裹着弹牙的虾仁，一口一个满足', tags: ['清淡', '点心', '精致'] },
  { id: 'dry-beef-river', name: '干炒牛河', emoji: '🍝', category: '粤菜', rarity: 'common', description: '镬气十足，河粉根根分明，牛肉嫩滑多汁', tags: ['主食', '经典', '镬气'] },
  { id: 'wonton-noodle', name: '云吞面', emoji: '🍲', category: '粤菜', rarity: 'common', description: '鲜虾云吞配竹升面，汤清味浓温暖人心', tags: ['清淡', '面食', '暖心'] },

  // 湘菜
  { id: 'duojiao-yutou', name: '剁椒鱼头', emoji: '🐟', category: '湘菜', rarity: 'rare', description: '红艳艳的剁椒铺满鱼头，鲜辣到让你忘记一切烦恼', tags: ['辣', '硬菜', '招牌'] },
  { id: 'xiaochao-rou', name: '辣椒炒肉', emoji: '🌶️', category: '湘菜', rarity: 'common', description: '湖南人的灵魂家常菜，辣椒比肉还好吃', tags: ['辣', '下饭', '家常'] },
  { id: 'leijiao-pidan', name: '擂辣椒皮蛋', emoji: '🥚', category: '湘菜', rarity: 'common', description: '擂钵里捣出的烟火气，皮蛋与辣椒的神奇相遇', tags: ['辣', '凉菜', '特色'] },

  // 东北/鲁菜
  { id: 'guobaorou', name: '锅包肉', emoji: '🍯', category: '东北菜', rarity: 'common', description: '金黄酥脆，酸甜可口，咬一口咔嚓响', tags: ['酸甜', '酥脆', '硬菜'] },
  { id: 'di-san-xian', name: '地三鲜', emoji: '🍆', category: '东北菜', rarity: 'common', description: '土豆茄子青椒的朴素铁三角，比肉还香', tags: ['家常', '下饭', '素食'] },
  { id: 'yangrou-chuan', name: '羊肉串', emoji: '🍢', category: '烧烤', rarity: 'common', description: '孜然与辣椒包裹着滋滋冒油的羊肉，深夜的灵魂救赎', tags: ['烧烤', '香', '街头'] },

  // 日料
  { id: 'sushi', name: '手握寿司', emoji: '🍣', category: '日料', rarity: 'rare', description: '新鲜的刺身趴在温热的醋饭上，一口吞下整个大海', tags: ['清淡', '精致', '生食'] },
  { id: 'ramen', name: '豚骨拉面', emoji: '🍜', category: '日料', rarity: 'common', description: '浓郁的豚骨白汤，配上溏心蛋和叉烧，治愈一切不开心', tags: ['浓郁', '面食', '暖心'] },
  { id: 'tempura', name: '天妇罗', emoji: '🍤', category: '日料', rarity: 'rare', description: '轻薄酥脆的面衣锁住食材的鲜美，蘸上酱汁完美', tags: ['酥脆', '精致', '炸物'] },
  { id: 'unagi-don', name: '鳗鱼饭', emoji: '🐍', category: '日料', rarity: 'legendary', description: '蒲烧鳗鱼配秘制酱汁，每一粒米都裹着幸福', tags: ['甜', '高级', '奢华'] },

  // 韩料
  { id: 'k-bbq', name: '韩式烤肉', emoji: '🥩', category: '韩料', rarity: 'rare', description: '五花肉在铁板上滋滋作响，包上生菜蒜片一口闷', tags: ['香', '聚会', '过瘾'] },
  { id: 'bibimbap', name: '石锅拌饭', emoji: '🍚', category: '韩料', rarity: 'common', description: '锅巴脆香，拌开辣酱的瞬间五颜六色，吃到底还有惊喜', tags: ['主食', '微辣', '丰富'] },
  { id: 'fried-chicken', name: '韩式炸鸡', emoji: '🍗', category: '韩料', rarity: 'common', description: '外层酥脆裹着甜辣酱，配一瓶冰可乐，快乐加倍', tags: ['甜辣', '炸物', '聚会'] },

  // 火锅
  { id: 'hotpot-spicy', name: '重庆老火锅', emoji: '🫕', category: '火锅', rarity: 'rare', description: '翻滚的红油锅底，毛肚七上八下，越辣越过瘾', tags: ['辣', '聚会', '过瘾'] },
  { id: 'hotpot-mushroom', name: '菌汤火锅', emoji: '🍄', category: '火锅', rarity: 'common', description: '各种菌菇熬出的鲜美汤底，喝汤涮菜两不误', tags: ['清淡', '鲜美', '养生'] },
  { id: 'chaoshan-beef', name: '潮汕牛肉火锅', emoji: '🐮', category: '火锅', rarity: 'legendary', description: '现切的鲜牛肉在清汤里涮8秒，蘸上沙茶酱人间值得', tags: ['清淡', '鲜美', '高级'] },

  // 小吃
  { id: 'jianbing', name: '煎饼果子', emoji: '🫓', category: '小吃', rarity: 'common', description: '绿豆面摊开，鸡蛋一磕，薄脆一夹，早起的动力源泉', tags: ['早餐', '街头', '饱腹'] },
  { id: 'malatang', name: '麻辣烫', emoji: '🥘', category: '小吃', rarity: 'common', description: '挑选自己喜欢的食材，在麻辣汤里翻滚，平民美食之王', tags: ['辣', '丰富', '街头'] },
  { id: 'shengjian', name: '生煎包', emoji: '🥟', category: '小吃', rarity: 'common', description: '底部金黄焦脆，咬开汤汁四溢，小心烫嘴！', tags: ['鲜', '早餐', '上海'] },
  { id: 'choudoufu', name: '臭豆腐', emoji: '🧀', category: '小吃', rarity: 'rare', description: '闻着臭吃着香，外焦里嫩，长沙街头永远在排队的美味', tags: ['特色', '街头', '炸物'] },
  { id: 'bbq-skewers', name: '烧烤大拼', emoji: '🍖', category: '烧烤', rarity: 'common', description: '羊肉串牛板筋鸡翅烤茄子…串起整个夏天的夜晚', tags: ['烧烤', '聚会', '过瘾'] },

  // 西餐
  { id: 'burger', name: '芝士汉堡', emoji: '🍔', category: '西餐', rarity: 'common', description: '厚实的牛肉饼配上融化的芝士，简单粗暴的快乐', tags: ['饱腹', '快餐', '经典'] },
  { id: 'pizza', name: '意式披萨', emoji: '🍕', category: '西餐', rarity: 'common', description: '手工现揉饼底，拉丝的芝士，每一口都是意大利的浪漫', tags: ['饱腹', '聚会', '经典'] },
  { id: 'steak', name: '战斧牛排', emoji: '🥩', category: '西餐', rarity: 'legendary', description: '厚切带骨肋眼，五成熟，一刀下去肉汁四溢', tags: ['高级', '硬菜', '奢华'] },
  { id: 'pasta', name: '奶油培根意面', emoji: '🍝', category: '西餐', rarity: 'common', description: '蛋黄与芝士乳化出的丝滑酱汁，裹满每一根面', tags: ['浓郁', '主食', '经典'] },

  // 快餐
  { id: 'malaban', name: '麻辣拌', emoji: '🥗', category: '快餐', rarity: 'common', description: '自选蔬菜丸子拌上芝麻酱辣椒油，几分钟就能拥有的快乐', tags: ['辣', '便捷', '丰富'] },
  { id: 'gaifan', name: '黄焖鸡米饭', emoji: '🍛', category: '快餐', rarity: 'common', description: '鸡肉嫩滑入味，土豆软烂，汤汁拌饭三碗起步', tags: ['下饭', '饱腹', '经典'] },
  { id: 'lanzhou-mian', name: '兰州拉面', emoji: '🍜', category: '面食', rarity: 'common', description: '一清二白三红四绿五黄，师傅现场拉的面就是香', tags: ['清淡', '面食', '经典'] },
  { id: 'luosifen', name: '螺蛳粉', emoji: '🐌', category: '小吃', rarity: 'rare', description: '爱的人爱到骨子里，怕的人隔三条街就跑——你今天敢挑战吗', tags: ['辣', '特色', '浓郁'] },
  { id: 'youpo-mian', name: '油泼面', emoji: '🍝', category: '面食', rarity: 'common', description: '热油浇上辣椒面和蒜末的瞬间，滋啦一声灵魂升华', tags: ['辣', '面食', '西北'] },

  // 东南亚
  { id: 'thai-curry', name: '泰式咖喱蟹', emoji: '🦀', category: '东南亚', rarity: 'rare', description: '浓郁的咖喱包裹着鲜甜的蟹肉，舔手指是对它最大的尊重', tags: ['辣', '鲜美', '异域'] },
  { id: 'pho', name: '越南牛肉河粉', emoji: '🍜', category: '东南亚', rarity: 'common', description: '牛骨汤底清澈见底却鲜味十足，挤上柠檬汁清香四溢', tags: ['清淡', '鲜美', '异域'] },
  { id: 'mango-rice', name: '芒果糯米饭', emoji: '🥭', category: '东南亚', rarity: 'rare', description: '香甜芒果配椰浆糯米，一口穿越到泰国的夏天', tags: ['甜', '清爽', '异域'] },

  // 甜点 / 饮品
  { id: 'bubble-tea', name: '珍珠奶茶', emoji: '🧋', category: '饮品', rarity: 'common', description: 'Q弹珍珠配上香浓奶茶，续命神器不解释', tags: ['甜', '下午茶', '快乐'] },
  { id: 'ice-cream', name: '意式冰淇淋', emoji: '🍦', category: '甜品', rarity: 'common', description: '绵密细腻，入口即化，生活有时候需要一点甜', tags: ['甜', '冰凉', '治愈'] },
  { id: 'tanghulu', name: '冰糖葫芦', emoji: '🍡', category: '小吃', rarity: 'common', description: '山楂裹着晶莹的糖壳，酸甜在口中交织，童年的幸福味道', tags: ['甜', '街头', '怀旧'] },
]

export default FOODS

export const CATEGORIES = ['全部', '川菜', '粤菜', '湘菜', '东北菜', '日料', '韩料', '火锅', '烧烤', '面食', '小吃', '西餐', '东南亚', '快餐', '甜品', '饮品']

// 稀有度对应的彩带配置
export const RARITY_CONFIG = {
  common: { confetti: 100, spread: 70, colors: ['#a78bfa', '#c084fc', '#e9d5ff'], label: '' },
  rare: { confetti: 200, spread: 100, colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#a78bfa'], label: '稀有菜！' },
  legendary: { confetti: 400, spread: 160, colors: ['#f59e0b', '#ef4444', '#ec4899', '#fcd34d', '#fde68a'], label: '🏆 传说级！' },
}