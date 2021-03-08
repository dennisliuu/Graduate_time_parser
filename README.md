# 查詢台聯大教授歷史畢業年限

## Start project

爬蟲：

```python=
python3 -m venv py-env

source py-env/source/active

python install -r requirements.txt

python main.py
```

Frontend: frontend/

Backend: backend/

---

2020-11-13 : fix some link bug

2018-8-23 update: 支援顯示口試日期

2018-8-18 update: 支援系所過濾

2018-8-17 update: 支援中央、清大、陽明

計算方式：x = 畢業年 - 入學年

x == 1 : 兩年準時畢業 </br>
x == 2 : 兩到三年畢業 </br>
x == 3 : 三到四年畢業 </br>
x >= 4 : 四年以上畢業 </br>

僅供參考
