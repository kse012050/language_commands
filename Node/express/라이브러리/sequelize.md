# sequelize
Node.js 환경에서 __ORM(Object-Relational Mapping)__ 을 제공하는 라이브러리이다  
SQL을 직접 작성하지 않고도 JavaScript 객체를 통해 데이터베이스와 상호작용할 수 있다  
MySQL, PostgreSQL, MariaDB, SQLite, Microsoft SQL Server등 다양한 관계형 데이터베이스를 제공한다

## 설치방법
> npm install sequelize 

## 사용방법
~~~js
const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize){
        User.init({
            email: {
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true
            },
            provider: {
                type: Sequelize.ENUM('local', 'kakao'),
                allowNull: false,
                defaultValue: 'local'
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'user',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        })
    }

    static associate(db){
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User, {
            foreignKey: 'followingId',
            as: 'Followers',
            through: 'Follow'
        })
        db.User.belongsToMany(db.User, {
            foreignKey: 'fallowerId',
            as: 'Followings',
            through: 'Follow'
        })
    }
}

class 이름 extends Sequelize.Model {
    static initiate(sequelize){ // 테이블 스키마와 설정을 정의
        이름.init({
            항목이름: {
                type: 어떤 데이터가 들어갈 지 정함,
                allowNull: Null 허용,
                unique: 고유한 값 ( 중복 X )
            },
            provider: {
                type: Sequelize.ENUM('목록1', '목록2'),
                // Sequelize.ENUM() 는 목록 중에서 하나 선택
                allowNull: false,
                defaultValue: 'local'
                // 기본값
            },
        },{
            sequelize,  // DB 연결 객체를 전달.
            timestamps: true,   // true: createdAt 및 updatedAt 컬럼 자동 생성.
            underscored: false, // false: 컬럼 이름을 camelCase로 설정 (기본값).
            modelName: 'user',  // 'user': Sequelize 내부에서 사용할 모델 이름.
            tableName: 'users', // 'users': 실제 데이터베이스의 테이블 이름.
            paranoid: true, // true: deletedAt 컬럼 생성하여 소프트 삭제 지원.
            charset: 'utf8',    // charset 및 collate: UTF-8 설정으로 한글 지원
            collate: 'utf8_general_ci' // charset 및 collate: UTF-8 설정으로 한글 지원
        })
    }

    static associate(db){   // 다른 모델과의 관계 설정
        db.User.hasMany(db.Post);  // User 모델과 Post 모델은 1:N 관계를 가짐. 즉, 한 사용자가 여러 개의 게시글을 가질 수 있다
        db.User.belongsToMany(db.User, {
            foreignKey: 'followingId',
            as: 'Followers',
            through: 'Follow'
        })
        db.User.belongsToMany(db.User, {
            foreignKey: 'fallowerId',
            as: 'Followings',
            through: 'Follow'
        })
    }
}
~~~

[내용출처 Sequelize 공식사이트](https://sequelize.org/)