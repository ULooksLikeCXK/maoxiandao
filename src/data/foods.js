const FOODS = [
  // ==================== 川菜 ====================
  { id: 'gongbao-chicken', name: '宫保鸡丁', emoji: '🍗', category: '川菜', rarity: 'common', description: '鸡肉嫩滑，花生香脆，麻辣鲜香一口入魂', tags: ['辣', '下饭', '经典'] },
  { id: 'mapo-tofu', name: '麻婆豆腐', emoji: '🫘', category: '川菜', rarity: 'common', description: '麻辣烫香，嫩豆腐在舌尖化开的幸福', tags: ['辣', '麻', '下饭'] },
  { id: 'shuizhu-roupian', name: '水煮肉片', emoji: '🥩', category: '川菜', rarity: 'rare', description: '滚烫红油浇下的一瞬间，整个灵魂都在颤抖', tags: ['辣', '硬菜', '过瘾'] },
  { id: 'huiguorou', name: '回锅肉', emoji: '🥓', category: '川菜', rarity: 'common', description: '川菜之魂，肥而不腻，每一片都是经典', tags: ['微辣', '经典', '下饭'] },
  { id: 'fuqi-feipian', name: '夫妻肺片', emoji: '🐂', category: '川菜', rarity: 'rare', description: '麻辣鲜香薄如蝉翼，一口就上瘾', tags: ['辣', '凉菜', '经典'] },
  { id: 'dan-dan-mian', name: '担担面', emoji: '🍜', category: '川菜', rarity: 'common', description: '肉末芽菜花生碎，拌开的瞬间香到天灵盖', tags: ['辣', '面食', '街头'] },
  { id: 'yuxiang-rousi', name: '鱼香肉丝', emoji: '🥕', category: '川菜', rarity: 'common', description: '没有鱼的鱼香，酸甜微辣裹满每一根肉丝，下饭神器', tags: ['微辣', '酸甜', '经典'] },
  { id: 'lazi-ji', name: '辣子鸡', emoji: '🌶️', category: '川菜', rarity: 'rare', description: '辣椒堆里找鸡肉的快乐，麻辣焦香越嚼越上瘾', tags: ['辣', '香脆', '过瘾'] },
  { id: 'suancai-yu', name: '酸菜鱼', emoji: '🐟', category: '川菜', rarity: 'rare', description: '老坛酸菜遇上鲜嫩鱼片，酸爽鲜辣，汤都要喝光', tags: ['酸辣', '鲜美', '硬菜'] },
  { id: 'kou-shui-ji', name: '口水鸡', emoji: '🐔', category: '川菜', rarity: 'rare', description: '红油芝麻花椒三重暴击，光念名字就开始流口水', tags: ['辣', '麻', '凉菜'] },

  // ==================== 粤菜 ====================
  { id: 'baiqie-ji', name: '白切鸡', emoji: '🐔', category: '粤菜', rarity: 'common', description: '皮爽肉滑，蘸上姜葱油，简单即是极致', tags: ['清淡', '经典', '鲜'] },
  { id: 'char-siu', name: '蜜汁叉烧', emoji: '🍖', category: '粤菜', rarity: 'rare', description: '外焦里嫩，蜜汁的甜与肉的焦香完美交织', tags: ['甜', '烧腊', '经典'] },
  { id: 'har-gow', name: '水晶虾饺', emoji: '🥟', category: '粤菜', rarity: 'rare', description: '半透明的皮包裹着弹牙的虾仁，一口一个满足', tags: ['清淡', '点心', '精致'] },
  { id: 'dry-beef-river', name: '干炒牛河', emoji: '🍝', category: '粤菜', rarity: 'common', description: '镬气十足，河粉根根分明，牛肉嫩滑多汁', tags: ['主食', '经典', '镬气'] },
  { id: 'wonton-noodle', name: '云吞面', emoji: '🍲', category: '粤菜', rarity: 'common', description: '鲜虾云吞配竹升面，汤清味浓温暖人心', tags: ['清淡', '面食', '暖心'] },
  { id: 'siu-goose', name: '烧鹅', emoji: '🦆', category: '粤菜', rarity: 'rare', description: '皮脆肉嫩汁水四溢，蘸上酸梅酱一口升天', tags: ['烧腊', '经典', '硬菜'] },
  { id: 'cheong-fun', name: '肠粉', emoji: '📜', category: '粤菜', rarity: 'common', description: '薄如蝉翼滑如丝绸，淋上豉油就是一天最好的开始', tags: ['清淡', '早餐', '经典'] },
  { id: 'claypot-rice', name: '煲仔饭', emoji: '🍚', category: '粤菜', rarity: 'rare', description: '锅底的焦香锅巴是精华，淋上酱汁拌匀的那一刻', tags: ['主食', '经典', '暖心'] },
  { id: 'spareribs-blackbean', name: '豉汁蒸排骨', emoji: '🦴', category: '粤菜', rarity: 'common', description: '豆豉的咸香渗进每一块排骨，嫩滑脱骨', tags: ['清淡', '点心', '鲜美'] },

  // ==================== 湘菜 ====================
  { id: 'duojiao-yutou', name: '剁椒鱼头', emoji: '🐟', category: '湘菜', rarity: 'rare', description: '红艳艳的剁椒铺满鱼头，鲜辣到让你忘记一切烦恼', tags: ['辣', '硬菜', '招牌'] },
  { id: 'xiaochao-rou', name: '辣椒炒肉', emoji: '🌶️', category: '湘菜', rarity: 'common', description: '湖南人的灵魂家常菜，年销500万份，辣椒比肉还好吃', tags: ['辣', '下饭', '家常'] },
  { id: 'leijiao-pidan', name: '擂辣椒皮蛋', emoji: '🥚', category: '湘菜', rarity: 'common', description: '擂钵里捣出的烟火气，皮蛋与辣椒的神奇相遇', tags: ['辣', '凉菜', '特色'] },
  { id: 'xiaochao-niurou', name: '小炒黄牛肉', emoji: '🐂', category: '湘菜', rarity: 'common', description: '鲜嫩黄牛肉大火爆炒，35秒出锅，长沙必吃经典', tags: ['辣', '下饭', '硬菜'] },
  { id: 'suan-doujiao', name: '酸豆角肉末', emoji: '🫛', category: '湘菜', rarity: 'common', description: '酸豆角的酸脆撞上肉末的咸香，三碗米饭的配菜额已备好', tags: ['酸辣', '下饭', '家常'] },
  { id: 'maoshi-hongshaorou', name: '毛氏红烧肉', emoji: '🥘', category: '湘菜', rarity: 'rare', description: '不加酱油的红烧肉，冰糖上色肥而不腻入口即化', tags: ['咸香', '硬菜', '经典'] },
  { id: 'kouwei-xia', name: '口味虾', emoji: '🦞', category: '湘菜', rarity: 'legendary', description: '长沙夏夜的灵魂！紫苏蒜蓉辣椒炖出一盆红艳艳的幸福', tags: ['辣', '宵夜', '招牌'] },

  // ==================== 东北菜 ====================
  { id: 'guobaorou', name: '锅包肉', emoji: '🍯', category: '东北菜', rarity: 'common', description: '金黄酥脆，酸甜可口，咬一口咔嚓响', tags: ['酸甜', '酥脆', '硬菜'] },
  { id: 'di-san-xian', name: '地三鲜', emoji: '🍆🍠', category: '东北菜', rarity: 'common', description: '土豆茄子青椒的朴素铁三角，比肉还香', tags: ['家常', '下饭', '素食'] },
  { id: 'suancai-bairou', name: '酸菜白肉炖血肠', emoji: '🍲', category: '东北菜', rarity: 'rare', description: '东北杀猪菜的王者，酸爽开胃肉香四溢', tags: ['酸爽', '硬菜', '特色'] },
  { id: 'xiaoji-dunmogu', name: '小鸡炖蘑菇', emoji: '🍄', category: '东北菜', rarity: 'rare', description: '散养笨鸡配长白山榛蘑，炖到骨肉分离香气飘满屋', tags: ['咸香', '暖心', '硬菜'] },
  { id: 'liu-rou-duan', name: '溜肉段', emoji: '🥩', category: '东北菜', rarity: 'common', description: '锅包肉的咸香老爹，外酥里嫩淡淡回甜', tags: ['咸香', '酥脆', '经典'] },
  { id: 'jiang-dagu', name: '酱骨架', emoji: '🦴', category: '东北菜', rarity: 'common', description: '大块猪骨秘制酱料炖到脱骨，必须用手抓着啃才过瘾', tags: ['咸香', '硬菜', '豪迈'] },
  { id: 'zhurou-fentiao', name: '猪肉炖粉条', emoji: '🍲', category: '东北菜', rarity: 'common', description: '五花肉煸出油香配上久炖不烂的土豆粉条，东北家常魂', tags: ['咸香', '暖心', '经典'] },
  { id: 'dongbei-dalapi', name: '东北大拉皮', emoji: '🥗', category: '东北菜', rarity: 'common', description: 'Q弹的粉皮配上麻酱黄瓜丝，解腻神器一口清爽', tags: ['凉菜', '解腻', '特色'] },

  // ==================== 烧烤 ====================
  { id: 'yangrou-chuan', name: '羊肉串', emoji: '🍢', category: '烧烤', rarity: 'common', description: '孜然与辣椒包裹着滋滋冒油的羊肉，深夜的灵魂救赎', tags: ['烧烤', '香', '街头'] },
  { id: 'bbq-skewers', name: '烧烤大拼', emoji: '🍖', category: '烧烤', rarity: 'common', description: '羊肉串牛板筋鸡翅烤茄子…串起整个夏天的夜晚', tags: ['烧烤', '聚会', '过瘾'] },
  { id: 'kao-qiezi', name: '蒜蓉烤茄子', emoji: '🍆', category: '烧烤', rarity: 'common', description: '整根烤软剖开铺满蒜蓉小米辣，比肉还香的素菜之王', tags: ['烧烤', '素食', '经典'] },
  { id: 'kao-shenghao', name: '烤生蚝', emoji: '🦪', category: '烧烤', rarity: 'rare', description: '蒜蓉粉丝铺满肥美的蚝肉，鲜到掉眉毛', tags: ['烧烤', '海鲜', '鲜美'] },
  { id: 'kao-wuhuarou', name: '烤五花肉', emoji: '🥓', category: '烧烤', rarity: 'common', description: '烤到微焦的五花肉裹上生菜蒜片，一口灵魂出窍', tags: ['烧烤', '香', '过瘾'] },
  { id: 'zhang-zhong-bao', name: '掌中宝', emoji: '🦴', category: '烧烤', rarity: 'common', description: '一口一个嘎嘣脆，越嚼越香根本停不下来', tags: ['烧烤', '脆', '下酒'] },

  // ==================== 日料 ====================
  { id: 'sushi', name: '手握寿司', emoji: '🍣', category: '日料', rarity: 'rare', description: '新鲜的刺身趴在温热的醋饭上，一口吞下整个大海', tags: ['清淡', '精致', '生食'] },
  { id: 'ramen', name: '豚骨拉面', emoji: '🍜', category: '日料', rarity: 'common', description: '浓郁的豚骨白汤，配上溏心蛋和叉烧，治愈一切不开心', tags: ['浓郁', '面食', '暖心'] },
  { id: 'tempura', name: '天妇罗', emoji: '🍤', category: '日料', rarity: 'rare', description: '轻薄酥脆的面衣锁住食材的鲜美，蘸上酱汁完美', tags: ['酥脆', '精致', '炸物'] },
  { id: 'unagi-don', name: '鳗鱼饭', emoji: '🐍', category: '日料', rarity: 'legendary', description: '蒲烧鳗鱼配秘制酱汁，每一粒米都裹着幸福', tags: ['甜', '高级', '奢华'] },
  { id: 'kare-raisu', name: '日式咖喱饭', emoji: '🍛', category: '日料', rarity: 'common', description: '浓郁醇厚的咖喱酱浇在热米饭上，每一勺都是治愈', tags: ['浓郁', '主食', '暖心'] },
  { id: 'takoyaki', name: '章鱼小丸子', emoji: '🐙', category: '日料', rarity: 'common', description: '外焦里嫩木鱼花在跳舞，一口咬开章鱼弹牙', tags: ['酥脆', '街头', '解馋'] },
  { id: 'tonkatsu', name: '日式炸猪排', emoji: '🐷', category: '日料', rarity: 'common', description: '金黄酥脆的外壳锁住鲜嫩猪肉，蘸上猪排酱汁满足感爆棚', tags: ['酥脆', '硬菜', '经典'] },

  // ==================== 韩料 ====================
  { id: 'k-bbq', name: '韩式烤肉', emoji: '🥩', category: '韩料', rarity: 'rare', description: '五花肉在铁板上滋滋作响，包上生菜蒜片一口闷', tags: ['香', '聚会', '过瘾'] },
  { id: 'bibimbap', name: '石锅拌饭', emoji: '🍚', category: '韩料', rarity: 'common', description: '锅巴脆香，拌开辣酱的瞬间五颜六色，吃到底还有惊喜', tags: ['主食', '微辣', '丰富'] },
  { id: 'fried-chicken', name: '韩式炸鸡', emoji: '🍗', category: '韩料', rarity: 'common', description: '外层酥脆裹着甜辣酱，配一瓶冰可乐，快乐加倍', tags: ['甜辣', '炸物', '聚会'] },
  { id: 'army-stew', name: '部队锅', emoji: '🫕', category: '韩料', rarity: 'common', description: '午餐肉拉面年糕芝士一锅炖，冬天最好的拥抱', tags: ['微辣', '暖锅', '聚会'] },
  { id: 'jjajangmyeon', name: '韩式炸酱面', emoji: '🍝', category: '韩料', rarity: 'common', description: '春酱炒出的黑亮酱汁裹满弹牙面条，韩剧同款幸福', tags: ['咸香', '面食', '经典'] },
  { id: 'tteokbokki', name: '辣炒年糕', emoji: '🍡', category: '韩料', rarity: 'common', description: 'Q弹年糕泡在甜辣酱里，街头小吃女王不接受反驳', tags: ['甜辣', '街头', '解馋'] },

  // ==================== 火锅 ====================
  { id: 'hotpot-spicy', name: '重庆老火锅', emoji: '🫕', category: '火锅', rarity: 'rare', description: '翻滚的红油锅底，毛肚七上八下，越辣越过瘾', tags: ['辣', '聚会', '过瘾'] },
  { id: 'hotpot-mushroom', name: '菌汤火锅', emoji: '🍄', category: '火锅', rarity: 'common', description: '各种菌菇熬出的鲜美汤底，喝汤涮菜两不误', tags: ['清淡', '鲜美', '养生'] },
  { id: 'chaoshan-beef', name: '潮汕牛肉火锅', emoji: '🐮', category: '火锅', rarity: 'legendary', description: '现切的鲜牛肉在清汤里涮8秒，蘸上沙茶酱人间值得', tags: ['清淡', '鲜美', '高级'] },
  { id: 'chuan-chuan-xiang', name: '串串香', emoji: '🍢', category: '火锅', rarity: 'common', description: '一锅红汤几百根签子，数签签的快乐谁吃谁知道', tags: ['辣', '丰富', '街头'] },
  { id: 'yezi-ji-hotpot', name: '椰子鸡火锅', emoji: '🥥', category: '火锅', rarity: 'rare', description: '清甜的椰青水煮出嫩滑鸡肉，蘸上沙姜青柠汁，清爽到飞起', tags: ['清淡', '鲜美', '养生'] },

  // ==================== 面食 ====================
  { id: 'lanzhou-mian', name: '兰州拉面', emoji: '🍜', category: '面食', rarity: 'common', description: '一清二白三红四绿五黄，师傅现场拉的面就是香', tags: ['清淡', '面食', '经典'] },
  { id: 'youpo-mian', name: '油泼面', emoji: '🍝', category: '面食', rarity: 'common', description: '热油浇上辣椒面和蒜末的瞬间，滋啦一声灵魂升华', tags: ['辣', '面食', '西北'] },
  { id: 'zha-jiang-mian', name: '老北京炸酱面', emoji: '🍜', category: '面食', rarity: 'common', description: '肉丁黄酱熬出的浓香配上六碟面码，北京人的乡愁', tags: ['咸香', '面食', '经典'] },
  { id: 'chongqing-xiaomian', name: '重庆小面', emoji: '🍜', category: '面食', rarity: 'common', description: '一碗红油麻辣小面，叫醒每个重庆人的早晨', tags: ['辣', '面食', '街头'] },
  { id: 'congyou-banmian', name: '葱油拌面', emoji: '🧅', category: '面食', rarity: 'common', description: '慢火熬出的葱油香气，拌开是最简单的极致满足', tags: ['咸香', '面食', '上海'] },
  { id: 'reganmian', name: '热干面', emoji: '🍜', category: '面食', rarity: 'common', description: '芝麻酱裹满碱水面配上辣萝卜丁，武汉人的过早之光', tags: ['咸香', '面食', '早餐'] },

  // ==================== 小吃 ====================
  { id: 'jianbing', name: '煎饼果子', emoji: '🫓', category: '小吃', rarity: 'common', description: '绿豆面摊开鸡蛋一磕薄脆一夹，早起的动力源泉', tags: ['早餐', '街头', '饱腹'] },
  { id: 'malatang', name: '麻辣烫', emoji: '🥘', category: '小吃', rarity: 'common', description: '挑选自己喜欢的食材在麻辣汤里翻滚，平民美食之王', tags: ['辣', '丰富', '街头'] },
  { id: 'shengjian', name: '生煎包', emoji: '🥟', category: '小吃', rarity: 'common', description: '底部金黄焦脆，咬开汤汁四溢，小心烫嘴！', tags: ['鲜', '早餐', '上海'] },
  { id: 'choudoufu', name: '臭豆腐', emoji: '🧀', category: '小吃', rarity: 'rare', description: '闻着臭吃着香外焦里嫩，长沙街头永远在排队的美味', tags: ['特色', '街头', '炸物'] },
  { id: 'luosifen', name: '螺蛳粉', emoji: '🐌', category: '小吃', rarity: 'rare', description: '爱的人爱到骨子里怕的人隔三条街就跑——你今天敢挑战吗', tags: ['辣', '特色', '浓郁'] },
  { id: 'tanghulu', name: '冰糖葫芦', emoji: '🍡', category: '小吃', rarity: 'common', description: '山楂裹着晶莹的糖壳，酸甜在口中交织，童年的幸福味道', tags: ['甜', '街头', '怀旧'] },
  { id: 'roujiamo', name: '肉夹馍', emoji: '🥙', category: '小吃', rarity: 'common', description: '白吉馍夹着腊汁肉，咬下去肉汁从嘴角流下，西北之光', tags: ['咸香', '街头', '饱腹'] },
  { id: 'kao-lengmian', name: '烤冷面', emoji: '🧇', category: '小吃', rarity: 'common', description: '铁板上煎香的冷面打上鸡蛋刷上酱料，东北夜市之魂', tags: ['咸香', '街头', '宵夜'] },

  // ==================== 西餐 ====================
  { id: 'burger', name: '芝士汉堡', emoji: '🍔', category: '西餐', rarity: 'common', description: '厚实的牛肉饼配上融化的芝士，简单粗暴的快乐', tags: ['饱腹', '经典', '美式'] },
  { id: 'pizza', name: '意式披萨', emoji: '🍕', category: '西餐', rarity: 'common', description: '手工现揉饼底拉丝的芝士，每一口都是意大利的浪漫', tags: ['饱腹', '聚会', '经典'] },
  { id: 'steak', name: '战斧牛排', emoji: '🥩', category: '西餐', rarity: 'legendary', description: '厚切带骨肋眼五成熟，一刀下去肉汁四溢', tags: ['高级', '硬菜', '奢华'] },
  { id: 'pasta', name: '奶油培根意面', emoji: '🍝', category: '西餐', rarity: 'common', description: '蛋黄与芝士乳化出的丝滑酱汁裹满每一根面', tags: ['浓郁', '主食', '经典'] },
  { id: 'caesar-salad', name: '凯撒沙拉', emoji: '🥗', category: '西餐', rarity: 'common', description: '爽脆罗马生菜配帕玛森芝士和脆面包丁，轻盈又满足', tags: ['清淡', '健康', '经典'] },
  { id: 'club-sandwich', name: '俱乐部三明治', emoji: '🥪', category: '西餐', rarity: 'common', description: '三层吐司夹满鸡肉培根生菜，下午茶时间的最佳拍档', tags: ['饱腹', '简餐', '经典'] },
  { id: 'roast-chicken', name: '迷迭香烤鸡', emoji: '🍗', category: '西餐', rarity: 'rare', description: '外皮烤得金黄焦脆，撕开肉汁四溢，满屋飘香', tags: ['香', '硬菜', '聚会'] },

  // ==================== 东南亚 ====================
  { id: 'thai-curry', name: '泰式咖喱蟹', emoji: '🦀', category: '东南亚', rarity: 'rare', description: '浓郁的咖喱包裹着鲜甜的蟹肉，舔手指是对它最大的尊重', tags: ['辣', '鲜美', '异域'] },
  { id: 'pho', name: '越南牛肉河粉', emoji: '🍜', category: '东南亚', rarity: 'common', description: '牛骨汤底清澈见底却鲜味十足，挤上柠檬汁清香四溢', tags: ['清淡', '鲜美', '异域'] },
  { id: 'mango-rice', name: '芒果糯米饭', emoji: '🥭', category: '东南亚', rarity: 'rare', description: '香甜芒果配椰浆糯米，一口穿越到泰国的夏天', tags: ['甜', '清爽', '异域'] },
  { id: 'tom-yum', name: '冬阴功汤', emoji: '🍲', category: '东南亚', rarity: 'rare', description: '香茅南姜柠檬叶熬出的酸辣鲜三重奏，世界三大名汤之一', tags: ['酸辣', '鲜美', '经典'] },
  { id: 'hainan-chicken', name: '海南鸡饭', emoji: '🐔', category: '东南亚', rarity: 'common', description: '嫩滑鸡肉配鸡油饭，灵魂是那一碟秘制辣椒蒜蓉酱', tags: ['清淡', '鲜美', '经典'] },
  { id: 'viet-springroll', name: '越南鲜春卷', emoji: '🫔', category: '东南亚', rarity: 'common', description: '米纸包裹鲜虾薄荷米粉，蘸上鱼露酱，一口清爽到肺腑', tags: ['清淡', '健康', '清爽'] },
  { id: 'green-curry', name: '绿咖喱鸡', emoji: '🍛', category: '东南亚', rarity: 'common', description: '清新椰奶绿咖喱配上嫩鸡块，拌饭能把锅底刮穿', tags: ['微辣', '浓郁', '下饭'] },

  // ==================== 快餐 ====================
  { id: 'malaban', name: '麻辣拌', emoji: '🥗', category: '快餐', rarity: 'common', description: '自选蔬菜丸子拌上芝麻酱辣椒油，几分钟就能拥有的快乐', tags: ['辣', '便捷', '丰富'] },
  { id: 'gaifan', name: '黄焖鸡米饭', emoji: '🍛', category: '快餐', rarity: 'common', description: '鸡肉嫩滑入味，土豆软烂，汤汁拌饭三碗起步', tags: ['下饭', '饱腹', '经典'] },
  { id: 'malaxiangguo', name: '麻辣香锅', emoji: '🥘', category: '快餐', rarity: 'common', description: '自选荤素猛火爆炒，麻辣鲜香一锅端，打工人的奢侈午餐', tags: ['辣', '丰富', '过瘾'] },
  { id: 'dan-chao-fan', name: '蛋炒饭', emoji: '🍚', category: '快餐', rarity: 'common', description: '粒粒分明的米饭裹着蛋香，最简单的往往最考验功夫', tags: ['咸香', '主食', '家常'] },
  { id: 'guoqiao-mixian', name: '过桥米线', emoji: '🍜', category: '快餐', rarity: 'rare', description: '滚烫的鸡汤一碗碗烫熟薄如纸的配料，仪式感与美味并存', tags: ['清淡', '鲜美', '云南'] },
  { id: 'shaxian-xiaochi', name: '沙县小吃', emoji: '🥟', category: '快餐', rarity: 'common', description: '扁肉拌面炖罐蒸饺四大天王，十块钱能吃饱的国民食堂', tags: ['咸香', '便捷', '平价'] },

  // ==================== 甜品 ====================
  { id: 'ice-cream', name: '意式冰淇淋', emoji: '🍦', category: '甜品', rarity: 'common', description: '绵密细腻入口即化，生活有时候需要一点甜', tags: ['甜', '冰凉', '治愈'] },
  { id: 'tiramisu', name: '提拉米苏', emoji: '🍰', category: '甜品', rarity: 'rare', description: '咖啡与马斯卡彭的层层缠绵，带我走的浪漫', tags: ['甜', '咖啡', '意式'] },
  { id: 'shuang-pi-nai', name: '双皮奶', emoji: '🍮', category: '甜品', rarity: 'common', description: '顺德水牛奶做的双层奶皮，入口嫩滑像在吃云朵', tags: ['甜', '奶香', '经典'] },
  { id: 'yangzhi-ganlu', name: '杨枝甘露', emoji: '🥭', category: '甜品', rarity: 'common', description: '芒果西柚西米椰浆的黄金组合，港式甜品天花板', tags: ['甜', '清爽', '经典'] },
  { id: 'taro-balls', name: '芋圆烧仙草', emoji: '🍠', category: '甜品', rarity: 'common', description: 'Q弹芋圆配爽滑仙草，冰镇后每一勺都是夏日的味道', tags: ['甜', '冰凉', '台湾'] },
  { id: 'egg-tart', name: '葡式蛋挞', emoji: '🥧', category: '甜品', rarity: 'common', description: '层层酥皮托着焦香蛋奶馅，每年卖出近百亿只的国民甜品', tags: ['甜', '酥脆', '经典'] },

  // ==================== 饮品 ====================
  { id: 'bubble-tea', name: '珍珠奶茶', emoji: '🧋', category: '饮品', rarity: 'common', description: 'Q弹珍珠配上香浓奶茶，续命神器不解释', tags: ['甜', '下午茶', '快乐'] },
  { id: 'jasmine-tea-latte', name: '伯牙绝弦', emoji: '🍵', category: '饮品', rarity: 'common', description: '茉莉雪芽遇上鲜牛乳，茶重奶轻清雅回甘，12亿杯的告白', tags: ['清淡', '茶香', '经典'] },
  { id: 'lemon-tea', name: '手打柠檬茶', emoji: '🍋', category: '饮品', rarity: 'common', description: '新鲜柠檬暴打出汁配红茶底，酸爽解腻夏日续命水', tags: ['酸爽', '清爽', '解腻'] },
  { id: 'sour-plum', name: '冰镇酸梅汤', emoji: '🫗', category: '饮品', rarity: 'common', description: '乌梅山楂桂花慢熬冰镇，一口酸爽解去所有油腻', tags: ['酸甜', '冰凉', '经典'] },
  { id: 'coconut-water', name: '鲜椰青水', emoji: '🥥', category: '饮品', rarity: 'common', description: '一整个椰子插上吸管，清甜解渴秒回热带海岛', tags: ['清甜', '天然', '解渴'] },
  { id: 'fruit-tea', name: '多肉葡萄', emoji: '🍇', category: '饮品', rarity: 'common', description: '大颗手剥葡萄果肉配咸香奶盖，果茶界的顶流女王', tags: ['甜', '果茶', '网红'] },
]

export default FOODS

export const CATEGORIES = ['全部', '川菜', '粤菜', '湘菜', '东北菜', '日料', '韩料', '火锅', '烧烤', '面食', '小吃', '西餐', '东南亚', '快餐', '甜品', '饮品']

// 稀有度对应的彩带配置
export const RARITY_CONFIG = {
  common: { confetti: 100, spread: 70, label: '' },
  rare: { confetti: 200, spread: 100, label: '⭐ 稀有美味！' },
  legendary: { confetti: 400, spread: 160, label: '👑 传说级！' },
}