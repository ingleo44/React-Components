import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker'


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure to do this?
<CommentDetail author="Sam" timeAgo="Today at 4:45" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 2:45" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 5:15" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Paul" timeAgo="Today at 4:55" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Bob" timeAgo="Today at 1:45" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Maria" timeAgo="Today at 11:45" avatarImage={Faker.image.avatar()} text={Faker.hacker.phrase()} />
            </ApprovalCard>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector("#root"));