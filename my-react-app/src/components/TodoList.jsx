import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = {
        'จันทร์': [
        { id: 1, text: 'เรียน React พื้นฐาน', completed: true },
        { id: 2, text: 'อ่านบทความ JavaScript', completed: true }
        ],
        'อังคาร': [
            { id: 3, text: 'ทำความเข้าใจ Components', completed: true },
            { id: 4, text: 'ลองเขียน Function Component', completed: true }
        ],
        'พุธ': [
            { id: 5, text: 'ฝึก Props และ State', completed: true },
            { id: 6, text: 'อ่าน Docs React Hooks', completed: false }
        ],
        'พฤหัสบดี': [
            { id: 7, text: 'สร้าง Mini Project', completed: false },
            { id: 8, text: 'ไปเที่ยว', completed: true }
        ],
        'ศุกร์': [
            { id: 9, text: 'ทบทวนโปรเจคที่ทำ', completed: false },
            { id: 10, text: 'พักผ่อน ดูหนัง/ฟังเพลง', completed: true },
            { id: 11, text: 'นอนเร็วขึ้น', completed: false }
        ],
        'เสาร์': [
            { id: 12, text: 'ออกไปเดินเล่น', completed: true },
            { id: 13, text: 'ทำอาหารกินเอง', completed: true }
        ],
        'อาทิตย์': [
            { id: 14, text: 'พักผ่อนเต็มที่', completed: true },
            { id: 15, text: 'วางแผนอาทิตย์หน้า', completed: true }
        ]
    };

    // คำนวณสถิติ
    const allTodos = Object.values(todos).flat();
    const completedCount = allTodos.filter(todo => todo.completed).length;
    const totalCount = allTodos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px' }}>
            <h3>📝 รายการที่ต้องทำ จันทร์ - อาทิตย์</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#f0f0f0',
                borderRadius: '20px',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#4caf50',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>

            {Object.entries(todos).map(([day, todos]) => (
                <div key={day} style={{ marginBottom: '25px' }}>
                    <h4 style={{ marginBottom: '10px', color: '#444' }}> {day}</h4>

                    {/* Todo Items */}
                    <div>
                        {todos.map(todo => (
                            <div 
                                key={todo.id}
                                style={{
                                    padding: '12px',
                                    margin: '6px 0',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{ marginRight: '12px', fontSize: '18px' }}>
                                    {todo.completed ? '✅' : '⬜'}
                                </span>
                                <span style={{
                                    flex: 1,
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    color: todo.completed ? '#666' : '#333'
                                }}>
                                    {todo.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                borderRadius: '8px',
                fontWeight: 'bold'
            }}>
                ✨ ทำเสร็จแล้ว {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;
