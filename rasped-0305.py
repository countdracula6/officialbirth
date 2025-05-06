import random
import pandas as pd
from datetime import datetime

# 生成随机用户池数据
def generate_user_pools(num_pools=5, users_per_pool=100):
    data = []
    flags = ["绿色", "黄色", "红色"]  # 标志类型
    
    for pool in range(1, num_pools + 1):
        for user in range(1, users_per_pool + 1):
            user_id = f"用户_{pool}_{user:03d}"  # 格式: 用户_池号_序号
            current_hour = datetime.now().hour  # 当前小时
            # 标志随机生成（绿色70%，黄色20%，红色10%）
            flag = random.choices(flags, weights=[70, 20, 10], k=1)[0]  
            
            # 模拟老虎机结果（3个随机符号）
            slot_symbols = ["🍒", "🍋", "🍊", "7️⃣", "💰", "🔔"]
            slot_result = " | ".join(random.choices(slot_symbols, k=3))
            
            data.append({
                "小时": current_hour,
                "用户ID": user_id,
                "池号": pool,
                "标志": flag,
                "老虎机结果": slot_result
            })
    
    return pd.DataFrame(data)

# 生成数据并显示前10条
df = generate_user_pools()
print(df.head(10))  # 打印前10行

# 保存为CSV文件（可选）
df.to_csv("用户池_老虎机数据.csv", index=False, encoding='utf-8-sig')
print("\n数据已保存到 '用户池_老虎机数据.csv'")