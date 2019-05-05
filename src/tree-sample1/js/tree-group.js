$(document).ready(function () {

    // 모든 트리를 한꺼번에 읽어 표시한다.
    initTree($('.my-body-left-menu'));

    $('.my-body-left-menu').find('li').on('click', function (e) {
        var delta = e.pageX - this.getBoundingClientRect().left;
        if (delta <= 10)
        {
            if ($(this).hasClass('opened'))
                closeTree($(this))
            else if ($(this).hasClass('closed'))
                openTree($(this))
        }
        else
        {
            $('.my-body-left-menu').find('.active').removeClass('active');
            $(this).addClass('active');
        }
    })

    $('.tree-group > .title').on('click', function (e) {

        if ($(this).hasClass('closed'))
        {
            $(this).next('ul').css('display', '');
            $(this).removeClass('closed').addClass('opened');
        }
        else if ($(this).hasClass('opened'))
        {
            $(this).next('ul').css('display', 'none');
            $(this).removeClass('opened').addClass('closed');
        }
    })
})

function initTree(parent)
{
    // 모든 트리 아이템들을 읽는다.
    var items = loadAllTreeItem();

    // 트리 아이템을 등록한다.
    for (var i = 0; i < items.length; i++)
    {
        var item = items[i];

        if (items[i].parentId == 0)
        {
            var div = $('<div class="tree-group" data-id="' + item['id'] + '"><span class="title">' + item['label'] + '</span></div>');
            div.append($('<ul data-parent-id="' + item.id + '" style="display: none"></ul>'))
            parent.append(div);
        }
        else
        {
            addChildTreeItem(items[i]);
        }
    }

    // 루트 트리 아이템을 펼친다.
    var li = $('li[data-id=0]');
    openTree(li);
}

function addChildTreeItem(item)
{
    var ul = $('ul[data-parent-id=' + item.parentId + ']');
    var parentId = item['parentId'];

    $('li[data-id=' + parentId + ']').addClass('closed');
    $('div[data-id=' + parentId + ']').find('span').addClass('closed');

    //var ul = parentLi.next();
    var li = $('<li data-id="' + item.id + '"><span>' + item.label + '</span></li>');
    ul.append(li);

    $('<ul data-parent-id="' + item.id + '" style="display: none"></ul>').insertAfter(li);
}

function openTree(li)
{
    li.removeClass('closed');
    li.addClass('opened');
    li.next('ul').css('display', '');
}

function closeTree(li)
{
    li.removeClass('opened');
    li.addClass('closed');
    li.next('ul').css('display', 'none');
}

function loadAllTreeItem()
{
    var items = [];

    items.push({id: 1, parentId: 0, label: 'Overview'});
    items.push({id: 2, parentId: 0, label: 'Architectural Patterns'});
    items.push({id: 10, parentId: 2, label: 'App Shell Model'});

    items.push({id: 3, parentId: 0, label: 'Design & User Experiences'});
    items.push({id: 11, parentId: 3, label: 'Designing Grate User Experiences'});
    items.push({id: 41, parentId: 11, label: 'Basic of User Experiences'});
    items.push({id: 42, parentId: 11, label: 'What Makes a Good Mobile Site?'});
    items.push({id: 43, parentId: 11, label: 'Introduction to variable fonts on the web'});

    items.push({id: 12, parentId: 3, label: 'Accessibility'});
    items.push({id: 44, parentId: 12, label: 'Overview'});
    items.push({id: 45, parentId: 12, label: 'Focus'});
    items.push({id: 46, parentId: 12, label: 'Semantics and ARIA'});
    items.push({id: 47, parentId: 12, label: 'Accessible Styles'});
    items.push({id: 48, parentId: 12, label: 'How To Do an Accessibility Review'});
    items.push({id: 49, parentId: 12, label: 'Accessibility for Teams'});

    items.push({id: 13, parentId: 3, label: 'Animations'});
    items.push({id: 50, parentId: 13, label: 'Overview'});
    items.push({id: 51, parentId: 13, label: 'CSS Versus Javascript'});
    items.push({id: 52, parentId: 13, label: 'The Basics of Easing'});
    items.push({id: 53, parentId: 13, label: 'Custom Easing'});
    items.push({id: 54, parentId: 13, label: 'Animating Between Views'});
    items.push({id: 55, parentId: 13, label: 'Choosing the Right Easing'});
    items.push({id: 56, parentId: 13, label: 'Animating Modal Views'});
    items.push({id: 57, parentId: 13, label: 'Asymmetric Animation Timing'});
    items.push({id: 58, parentId: 13, label: 'Animations and Performance'});

    items.push({id: 14, parentId: 3, label: 'Responsive Web Design'});
    items.push({id: 59, parentId: 14, label: 'Overview'});
    items.push({id: 60, parentId: 14, label: 'Patterns'});
    items.push({id: 61, parentId: 14, label: 'Responsive Images'});
    items.push({id: 62, parentId: 14, label: 'Multi-Device Content'});


    items.push({id: 4, parentId: 0, label: 'Integration & Engagement'});
    items.push({id: 15, parentId: 4, label: 'App Install Prompt'});
    items.push({id: 63, parentId: 15, label: 'Add to Home Screen (Web)'});
    items.push({id: 64, parentId: 15, label: 'App Install Prompt (Native)'});
    items.push({id: 65, parentId: 15, label: 'Additional Colors and Icons'});

    items.push({id: 16, parentId: 4, label: 'Device APIs'});
    items.push({id: 66, parentId: 16, label: 'Handling User Location'});
    items.push({id: 67, parentId: 16, label: 'Using Device Orientation & Motion'});
    items.push({id: 68, parentId: 16, label: 'Making Fullscreen Experiences'});
    items.push({id: 69, parentId: 16, label: 'Click to Call'});
    items.push({id: 70, parentId: 16, label: 'Building a Device for WebUSB'});


    items.push({id: 17, parentId: 4, label: 'Search Optimization'});

    items.push({id: 18, parentId: 4, label: 'Sign in and Credential Management'});
    items.push({id: 71, parentId: 18, label: 'Overview'});
    items.push({id: 72, parentId: 18, label: 'Sign in Users'});
    items.push({id: 73, parentId: 18, label: 'Save Credentials from Forms'});

    items.push({id: 19, parentId: 4, label: 'Social Discovery'});

    items.push({id: 20, parentId: 4, label: 'User input'});
    items.push({id: 74, parentId: 20, label: 'Create Amazing Forms'});
    items.push({id: 75, parentId: 20, label: 'Add Touch To Your Site'});

    items.push({id: 21, parentId: 4, label: 'Web Payments'});
    items.push({id: 76, parentId: 21, label: 'Overview'});
    items.push({id: 77, parentId: 21, label: 'Basics'});
    items.push({id: 78, parentId: 21, label: 'Merchant Guide'});
    items.push({id: 79, parentId: 21, label: 'Payment Apps Developer Guide'});


    items.push({id: 22, parentId: 4, label: 'Web Push Notifications'});
    items.push({id: 23, parentId: 4, label: 'WebAPKs on Android'});
    items.push({id: 24, parentId: 4, label: 'Web App Manifest'});

    items.push({id: 5, parentId: 0, label: 'Media & VR'});
    items.push({id: 25, parentId: 5, label: 'Video and Audio Playback'});
    items.push({id: 26, parentId: 5, label: 'Capture and Record'});
    items.push({id: 27, parentId: 5, label: 'Manipulating Media Files'});
    items.push({id: 28, parentId: 5, label: 'VR'});

    items.push({id: 6, parentId: 0, label: 'Performance'});
    items.push({id: 29, parentId: 6, label: 'Overview'});
    items.push({id: 30, parentId: 6, label: 'Measure Performance with RAIL Model'});
    items.push({id: 31, parentId: 6, label: 'Loading Performance'});
    items.push({id: 32, parentId: 6, label: 'Rendering Performance'});
    items.push({id: 33, parentId: 6, label: 'Audit your site'});

    items.push({id: 7, parentId: 0, label: 'Security'});
    items.push({id: 34, parentId: 7, label: 'Overview'});
    items.push({id: 35, parentId: 7, label: 'Content Security Policy'});
    items.push({id: 36, parentId: 7, label: 'Encrypting Data in Transit'});
    items.push({id: 37, parentId: 7, label: 'Preventing Mixed Content'});
    items.push({id: 38, parentId: 7, label: 'Help, I\'ve been hacked' });

    items.push({id: 8, parentId: 0, label: 'Base Technologies'});
    items.push({id: 39, parentId: 8, label: 'HTML & DOM'});
    items.push({id: 40, parentId: 8, label: 'JavaScript'});

    items.push({id: 9, parentId: 0, label: 'Glossary'});

    return items;
}