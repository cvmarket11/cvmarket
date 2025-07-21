document.addEventListener('DOMContentLoaded', function() {
    // بيانات النماذج
    const classicTemplates = [
        { name: "محمد الحربي", type: "عمرية", image: "https://via.placeholder.com/300x200?text=Classic+1" },
        { name: "محمد الحربي", type: "عمرية", image: "https://via.placeholder.com/300x200?text=Classic+2" },
        { name: "محمد الحربي", type: "عمرية", image: "https://via.placeholder.com/300x200?text=Classic+3" }
    ];
    
    const modernTemplates = [
        { name: "محمد الحربي", type: "نفليدية", image: "https://via.placeholder.com/300x200?text=Modern+1" },
        { name: "محمد الحربي", type: "نفليدية", image: "https://via.placeholder.com/300x200?text=Modern+2" },
        { name: "محمد الحربي", type: "نفليدية", image: "https://via.placeholder.com/300x200?text=Modern+3" }
    ];
    
    // تعبئة النماذج العمرية
    const classicContainer = document.getElementById('classic-templates');
    classicTemplates.forEach(template => {
        classicContainer.appendChild(createTemplateCard(template));
    });
    
    // تعبئة النماذج النفليدية
    const modernContainer = document.getElementById('modern-templates');
    modernTemplates.forEach(template => {
        modernContainer.appendChild(createTemplateCard(template));
    });
    
    // زر الشراء الرئيسي
    document.getElementById('main-cta').addEventListener('click', function(e) {
        e.preventDefault();
        alert('سيتم نقلك إلى صفحة اختيار القوالب');
    });
    
    // زر الشراء في قسم التسعير
    document.getElementById('buy-now').addEventListener('click', function() {
        alert('شكراً لاختيارك! سيتم توجيهك إلى صفحة الدفع');
    });
    
    // وظيفة إنشاء بطاقة قالب
    function createTemplateCard(template) {
        const card = document.createElement('div');
        card.className = 'template-card';
        
        const img = document.createElement('img');
        img.src = template.image;
        img.alt = `قالب ${template.type} - ${template.name}`;
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'template-name';
        nameDiv.textContent = template.name;
        
        card.appendChild(img);
        card.appendChild(nameDiv);
        
        // إضافة تأثير النقر
        card.addEventListener('click', function() {
            alert(`تم اختيار قالب ${template.type}: ${template.name}`);
        });
        
        return card;
    }
    
    // تأثير التمرير السلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});